#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

export function validateMidi(buffer) {
  const errors = [];

  if (buffer.length < 22) {
    errors.push('File too small (minimum 22 bytes)');
    return { valid: false, errors };
  }

  const header = buffer.slice(0, 4).toString();
  if (header !== 'MThd') {
    errors.push(`Invalid MIDI header: expected "MThd", got "${header}"`);
  }

  const headerLen = buffer.readUInt32BE(4);
  if (headerLen !== 6) {
    errors.push(`Invalid header length: expected 6, got ${headerLen}`);
  }

  const format = buffer.readUInt16BE(8);
  if (format > 2) {
    errors.push(`Invalid format: expected 0-2, got ${format}`);
  }

  const trackCount = buffer.readUInt16BE(10);
  if (trackCount === 0 && format !== 0) {
    errors.push('Invalid track count: 0 tracks in non-format 0 file');
  }

  const division = buffer.readUInt16BE(12);
  if (division === 0) {
    errors.push('Invalid time division: 0 ticks per quarter note');
  }

  if (buffer.length > 14) {
    const trackHeader = buffer.slice(14, 18).toString();
    if (trackHeader !== 'MTrk') {
      errors.push(`Invalid track header: expected "MTrk", got "${trackHeader}"`);
    }

    const trackLen = buffer.readUInt32BE(18);
    if (trackLen > buffer.length - 22) {
      errors.push(`Invalid track length: ${trackLen} bytes exceeds file size`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    info: {
      format,
      trackCount,
      division: (division & 0x8000) ? `SMPTE (${division})` : `${division} ticks per quarter note`,
      fileSize: buffer.length,
    },
  };
}

export function validateMidiFile(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    const result = validateMidi(buffer);

    return {
      file: path.basename(filePath),
      ...result,
    };
  } catch (e) {
    return {
      file: path.basename(filePath),
      valid: false,
      errors: [e.message],
    };
  }
}

export function validateMidiDirectory(dirPath) {
  const files = fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.mid'))
    .map(f => path.join(dirPath, f));

  return files.map(validateMidiFile);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: node validate-midi.js <midi-file-or-directory>');
    process.exit(1);
  }

  const target = args[0];

  if (!fs.existsSync(target)) {
    console.error(`Error: ${target} does not exist`);
    process.exit(1);
  }

  const stats = fs.statSync(target);
  let results;

  if (stats.isDirectory()) {
    results = validateMidiDirectory(target);
  } else {
    results = [validateMidiFile(target)];
  }

  let allValid = true;
  results.forEach(result => {
    const status = result.valid ? 'VALID' : 'INVALID';
    console.log(`\n${result.file}: ${status}`);

    if (result.info) {
      console.log(`  Format: ${result.info.format}`);
      console.log(`  Tracks: ${result.info.trackCount}`);
      console.log(`  Time division: ${result.info.division}`);
      console.log(`  File size: ${result.info.fileSize} bytes`);
    }

    if (result.errors.length > 0) {
      allValid = false;
      result.errors.forEach(err => {
        console.log(`  Error: ${err}`);
      });
    }
  });

  process.exit(allValid ? 0 : 1);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
