import Player from './components/player.js';
import { parse, merge } from './lib';

let tempo = 146;
let bars = 8;
let transpose = 0;
let playing = false;
let debounceTimer = null;

const p = window.p || new Player();
window.p = p;

const STORAGE_KEY = 'scoops:draft';

const BILLY_JEAN = `
  %F a3|c#4|f#4
  %G b3|d#4|g#4
  %A c#4|e4|a4
  %E b3|d4|f#4
  %C d3|f#4|a4 ; how to sum notes to chords?
  %B c#4|f4|g#3|b4

  # synth
    @INTRO
      #518      ---- ---- ---- ---- ---- ---- ---- ----
    @N < INTRO
    @A
      #518 75   x--- --x- ---- ---- x--- --x- ---- ---- %F %G %A %G
    @B < A
      #518      %E % % %
    @C < A
      #518      %C % %F %
    @D < A
      #518      %C % %B %

  ## bass
    %c f#2 c#2 e2 f#2 e2 c#2 b1 c#2
    %d b2 a2 b2 d3 d3 b2 a2 ; how to transpose?
    @INTRO
      #393      ---- ---- ---- ---- ---- ---- ---- ----
    @A
      #393  112 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x- %c %
    @N < A
    @B
      #393      x-x- x-x- --x- x-x- x-x- x-x- --x- x-x- %d %
    @C < INTRO
    @D < INTRO

  ## drums
    @INTRO
      #2123     ---- ---- ---- ---- ---- ---- ---- ----
      #2081 50  x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x-
      #2028     ---- x--- ---- x--- ---- x--- ---- x---
      #2001     x--- ---- x--- ---- x--- ---- x--- ----
    @A < INTRO
      #2123 90  x--- x--- x--- x--- x--- x--- x--- x---
      #2123 70  --x- --x- --x- --x- --x- --x- --x- --x-
    @N < A
    @B < A
    @C < A
    @D < A

  > INTRO N *2 A %
  > A % B A B A
  > A % B A C *3 D
  > A % B A B A
  > A % B A B A
  > A % B A C *3 D
  > A % B A B A
`;

const TETRIS = `
%a E4 B3 C4 D4 C4 B3 A3
%b A3 C4 E4 D4 C4 B3
%c B3 C4 D4 E4 C4 A3 A3

%d D4 F4 A4 G4 F4 E4
%e E4 C4 E4 D4 C4 B3

%f E4 C4 D4 B3 C4 A3 Ab3 B3
%g E4 C4 D4 B3 C4 E4 A3 Ab3

# piano
  @A
    #3 x-xx x-xx x-xx x-xx x-xx x-x- x-x- x--- %a %b %c
  @B
    #3 -x-x x-xx x-xx x-xx x-xx x-x- x-x- x--- %d %e %c
  @C
    #3 x--- x--- x--- x--- x--- x--- x--- x--- %f
  @D < C
    #3 %g

%x E2 E2 A2 A2 Ab2 E2 A2
%y D2 D2 C2 C2 E2 E2 A2
%z A2 A2 Ab2 Ab2 A2 A2 Ab3
%z_ A2 A2 Ab2 Ab2 A2 A2 A4 Ab4

# bass
  @A
    #2 x--- x--- x--- x--- x--- x--- x--- ---- %x
  @B < A
    #2 %y
  @C < A
    #2 %z
  @D
    #2 x--- x--- x--- x--- x--- x-x- x--- ---- %z_

> A B A B C D
`.trim();

function build(midi) {
  const mix = [];

  function get(nth, name) {
    const key = nth + name;

    if (!get[key]) {
      const track = [nth, name, []];
      mix.push(track);
      get[key] = { track };
    }
    return get[key];
  }

  midi.forEach(section => {
    section.forEach(parts => {
      parts.forEach(e => {
        const { track } = get(e[0], e[1]);
        for (let i = 0; i < e[2].length; i += 1) {
          track[2].push(e[2][i]);
        }
      });
    });
  });
  return mix;
}

function getData(input) {
  try {
    return build(merge(parse(input)));
  } catch (e) {
    console.error('Parse error:', e);
    showError(e.message || 'Parse error');
    return [];
  }
}

function showError(msg) {
  const statusEl = document.getElementById('status-message');
  if (statusEl) {
    statusEl.textContent = 'Error: ' + msg;
    statusEl.style.color = '#e94560';
    setTimeout(() => {
      statusEl.textContent = 'Ready';
      statusEl.style.color = '';
    }, 3000);
  }
}

function createDeferredSlider(config) {
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = String(config.min);
  slider.max = String(config.max);
  slider.value = String(config.initial);

  const display = document.createElement('span');
  display.textContent = config.format(config.initial);

  let mouseLeft = false;

  slider.addEventListener('mousedown', () => {
    mouseLeft = false;
  });

  slider.addEventListener('mouseleave', () => {
    mouseLeft = true;
  });

  slider.addEventListener('mouseup', () => {
    if (!mouseLeft) {
      config.commit(parseInt(slider.value));
    }
  });

  slider.addEventListener('input', () => {
    display.textContent = config.format(parseInt(slider.value));
  });

  return { slider, display };
}

function createDOM() {
  document.body.innerHTML = '';

  const toolbar = document.createElement('div');
  toolbar.id = 'toolbar';

  const playBtn = document.createElement('button');
  playBtn.id = 'play-btn';
  playBtn.textContent = '▶ Play';
  playBtn.addEventListener('click', play);

  const stopBtn = document.createElement('button');
  stopBtn.id = 'stop-btn';
  stopBtn.textContent = '■ Stop';
  stopBtn.addEventListener('click', stop);

  const bpmLabel = document.createElement('label');
  bpmLabel.textContent = 'BPM ';
  const { slider: bpmSlider, display: bpmDisplay } = createDeferredSlider({
    min: 60,
    max: 200,
    initial: tempo,
    format: v => v,
    commit: v => {
      tempo = v;
      updateLoop();
    },
  });
  bpmLabel.appendChild(bpmSlider);
  bpmLabel.appendChild(bpmDisplay);

  const barsLabel = document.createElement('label');
  barsLabel.textContent = 'Bars ';
  const barsSelect = document.createElement('select');
  barsSelect.id = 'bars-select';
  [4, 8, 16, 32].forEach(n => {
    const opt = document.createElement('option');
    opt.value = n;
    opt.textContent = n;
    if (n === bars) opt.selected = true;
    barsSelect.appendChild(opt);
  });
  barsSelect.addEventListener('change', (e) => {
    bars = parseInt(e.target.value);
    updateLoop();
  });
  barsLabel.appendChild(barsSelect);

  const transposeLabel = document.createElement('label');
  transposeLabel.textContent = 'Key ';
  const { slider: transposeSlider, display: transposeDisplay } = createDeferredSlider({
    min: -12,
    max: 12,
    initial: transpose,
    format: v => v > 0 ? '+' + v : v,
    commit: v => {
      transpose = v;
      updateLoop();
    },
  });
  transposeLabel.appendChild(transposeSlider);
  transposeLabel.appendChild(transposeDisplay);

  toolbar.appendChild(playBtn);
  toolbar.appendChild(stopBtn);
  toolbar.appendChild(bpmLabel);
  toolbar.appendChild(barsLabel);
  toolbar.appendChild(transposeLabel);

  const editor = document.createElement('textarea');
  editor.id = 'editor';
  editor.value = localStorage.getItem(STORAGE_KEY) || TETRIS;
  editor.addEventListener('input', () => {
    updateLoop();
    saveDraft();
  });

  editor.addEventListener('keydown', (e) => {
    if ((e.code === 'Space' || (e.metaKey && e.code === 'Enter'))) {
      e.preventDefault();
      if (playing) stop();
      else play();
    }
  });

  const statusbar = document.createElement('div');
  statusbar.id = 'statusbar';

  const beatDots = document.createElement('div');
  beatDots.id = 'beat-dots';
  for (let i = 0; i < 16; i++) {
    const dot = document.createElement('span');
    dot.className = 'beat-dot';
    beatDots.appendChild(dot);
  }

  const statusMessage = document.createElement('span');
  statusMessage.id = 'status-message';
  statusMessage.textContent = 'Ready';

  statusbar.appendChild(beatDots);
  statusbar.appendChild(statusMessage);

  document.body.appendChild(toolbar);
  document.body.appendChild(editor);
  document.body.appendChild(statusbar);

  return editor;
}

function saveDraft() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const editor = document.getElementById('editor');
    if (editor) {
      localStorage.setItem(STORAGE_KEY, editor.value);
    }
  }, 300);
}

function play() {
  stop();
  const editor = document.getElementById('editor');
  if (!editor) return;

  if (p.audioContext.state === 'suspended') {
    p.audioContext.resume();
  }
  playing = true;
  p.setLoopMachine(getData(editor.value), tempo, bars, transpose);
  p.playLoopMachine();

  const playBtn = document.getElementById('play-btn');
  if (playBtn) playBtn.textContent = '▶ Playing...';
}

function stop() {
  if (playing) {
    playing = false;
    p.stopLoopMachine();
  }
  const playBtn = document.getElementById('play-btn');
  if (playBtn) playBtn.textContent = '▶ Play';
}

function updateLoop() {
  const editor = document.getElementById('editor');
  if (!editor || !p) return;

  const changed = p.setLoopMachine(getData(editor.value), tempo, bars, transpose);
  if (changed && playing) {
    p.playLoopMachine(p.beatIndex);
  }
}

function beatIndicator() {
  const dots = document.querySelectorAll('.beat-dot');
  if (!dots.length || !p.loopStarted) {
    dots.forEach(d => d.classList.remove('active'));
    return;
  }

  dots.forEach((dot, i) => {
    if (i === p.beatIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  requestAnimationFrame(beatIndicator);
}

const editor = createDOM();
p.setLoopMachine(getData(editor.value), tempo, bars, transpose);
requestAnimationFrame(beatIndicator);

export default {};
