const STORAGE_KEY = 'scoops:snapshots';

function uid() {
  return `snap-${Math.random().toString(36).slice(2, 10)}`;
}

export class SnapshotManager {
  constructor() {
    this.snapshots = [];
    this.selectedId = null;
    this.load();
  }

  saveSnapshot(state, name) {
    const item = {
      id: uid(),
      name: name || `Snapshot ${this.snapshots.length + 1}`,
      timestamp: new Date().toISOString(),
      state,
    };
    this.snapshots.push(item);
    this.selectedId = item.id;
    this.persist();
    return item;
  }

  deleteSnapshot(id) {
    this.snapshots = this.snapshots.filter(item => item.id !== id);
    if (this.selectedId === id) this.selectedId = this.snapshots.length ? this.snapshots[0].id : null;
    this.persist();
  }

  getSnapshot(id) {
    return this.snapshots.find(item => item.id === id) || null;
  }

  exportJSON() {
    return JSON.stringify({ version: 1, snapshots: this.snapshots }, null, 2);
  }

  importJSON(raw) {
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.snapshots)) throw new Error('Invalid snapshots JSON');
    this.snapshots = parsed.snapshots
      .map(item => ({
        id: item.id || uid(),
        name: item.name || 'Snapshot',
        timestamp: item.timestamp || new Date().toISOString(),
        state: item.state || {},
      }));
    this.selectedId = this.snapshots.length ? this.snapshots[0].id : null;
    this.persist();
  }

  persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 1,
      snapshots: this.snapshots,
      selectedId: this.selectedId,
    }));
  }

  load() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      this.snapshots = Array.isArray(parsed.snapshots) ? parsed.snapshots : [];
      this.selectedId = parsed.selectedId || (this.snapshots[0] && this.snapshots[0].id) || null;
    } catch (e) {
      this.snapshots = [];
      this.selectedId = null;
    }
  }
}
