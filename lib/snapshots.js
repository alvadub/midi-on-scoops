const STORAGE_KEY = "scoops:snapshots";
function uid() {
  return `snap-${Math.random().toString(36).slice(2, 10)}`;
}
class SnapshotManager {
  constructor() {
    this.snapshots = [];
    this.selectedId = null;
    this.load();
  }
  saveSnapshot(state, name) {
    const item = {
      id: uid(),
      name: name || `Snapshot ${this.snapshots.length + 1}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      state
    };
    this.snapshots.push(item);
    this.selectedId = item.id;
    this.persist();
    return item;
  }
  deleteSnapshot(id) {
    this.snapshots = this.snapshots.filter((item) => item.id !== id);
    if (this.selectedId === id) this.selectedId = this.snapshots.length ? this.snapshots[0].id : null;
    this.persist();
  }
  getSnapshot(id) {
    return this.snapshots.find((item) => item.id === id) || null;
  }
  exportJSON() {
    return JSON.stringify({ version: 1, snapshots: this.snapshots }, null, 2);
  }
  importJSON(raw) {
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.snapshots)) throw new Error("Invalid snapshots JSON");
    this.snapshots = parsed.snapshots.map((item) => ({
      id: item.id || uid(),
      name: item.name || "Snapshot",
      timestamp: item.timestamp || (/* @__PURE__ */ new Date()).toISOString(),
      state: item.state || {}
    }));
    this.selectedId = this.snapshots.length ? this.snapshots[0].id : null;
    this.persist();
  }
  persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 1,
      snapshots: this.snapshots,
      selectedId: this.selectedId
    }));
  }
  load() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      this.snapshots = Array.isArray(parsed.snapshots) ? parsed.snapshots : [];
      this.selectedId = parsed.selectedId || this.snapshots[0] && this.snapshots[0].id || null;
    } catch (e) {
      this.snapshots = [];
      this.selectedId = null;
    }
  }
}
export {
  SnapshotManager
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xpYi9zcmMvbGliL3NuYXBzaG90cy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1RPUkFHRV9LRVkgPSAnc2Nvb3BzOnNuYXBzaG90cyc7XG5cbmZ1bmN0aW9uIHVpZCgpIHtcbiAgcmV0dXJuIGBzbmFwLSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTApfWA7XG59XG5cbmV4cG9ydCBjbGFzcyBTbmFwc2hvdE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNuYXBzaG90cyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRJZCA9IG51bGw7XG4gICAgdGhpcy5sb2FkKCk7XG4gIH1cblxuICBzYXZlU25hcHNob3Qoc3RhdGUsIG5hbWUpIHtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgaWQ6IHVpZCgpLFxuICAgICAgbmFtZTogbmFtZSB8fCBgU25hcHNob3QgJHt0aGlzLnNuYXBzaG90cy5sZW5ndGggKyAxfWAsXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHN0YXRlLFxuICAgIH07XG4gICAgdGhpcy5zbmFwc2hvdHMucHVzaChpdGVtKTtcbiAgICB0aGlzLnNlbGVjdGVkSWQgPSBpdGVtLmlkO1xuICAgIHRoaXMucGVyc2lzdCgpO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgZGVsZXRlU25hcHNob3QoaWQpIHtcbiAgICB0aGlzLnNuYXBzaG90cyA9IHRoaXMuc25hcHNob3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZElkID09PSBpZCkgdGhpcy5zZWxlY3RlZElkID0gdGhpcy5zbmFwc2hvdHMubGVuZ3RoID8gdGhpcy5zbmFwc2hvdHNbMF0uaWQgOiBudWxsO1xuICAgIHRoaXMucGVyc2lzdCgpO1xuICB9XG5cbiAgZ2V0U25hcHNob3QoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5zbmFwc2hvdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKSB8fCBudWxsO1xuICB9XG5cbiAgZXhwb3J0SlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiAxLCBzbmFwc2hvdHM6IHRoaXMuc25hcHNob3RzIH0sIG51bGwsIDIpO1xuICB9XG5cbiAgaW1wb3J0SlNPTihyYXcpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgaWYgKCFwYXJzZWQgfHwgIUFycmF5LmlzQXJyYXkocGFyc2VkLnNuYXBzaG90cykpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzbmFwc2hvdHMgSlNPTicpO1xuICAgIHRoaXMuc25hcHNob3RzID0gcGFyc2VkLnNuYXBzaG90c1xuICAgICAgLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGlkOiBpdGVtLmlkIHx8IHVpZCgpLFxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUgfHwgJ1NuYXBzaG90JyxcbiAgICAgICAgdGltZXN0YW1wOiBpdGVtLnRpbWVzdGFtcCB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHN0YXRlOiBpdGVtLnN0YXRlIHx8IHt9LFxuICAgICAgfSkpO1xuICAgIHRoaXMuc2VsZWN0ZWRJZCA9IHRoaXMuc25hcHNob3RzLmxlbmd0aCA/IHRoaXMuc25hcHNob3RzWzBdLmlkIDogbnVsbDtcbiAgICB0aGlzLnBlcnNpc3QoKTtcbiAgfVxuXG4gIHBlcnNpc3QoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnNpb246IDEsXG4gICAgICBzbmFwc2hvdHM6IHRoaXMuc25hcHNob3RzLFxuICAgICAgc2VsZWN0ZWRJZDogdGhpcy5zZWxlY3RlZElkLFxuICAgIH0pKTtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpIHx8ICd7fScpO1xuICAgICAgdGhpcy5zbmFwc2hvdHMgPSBBcnJheS5pc0FycmF5KHBhcnNlZC5zbmFwc2hvdHMpID8gcGFyc2VkLnNuYXBzaG90cyA6IFtdO1xuICAgICAgdGhpcy5zZWxlY3RlZElkID0gcGFyc2VkLnNlbGVjdGVkSWQgfHwgKHRoaXMuc25hcHNob3RzWzBdICYmIHRoaXMuc25hcHNob3RzWzBdLmlkKSB8fCBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc25hcHNob3RzID0gW107XG4gICAgICB0aGlzLnNlbGVjdGVkSWQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQUEsTUFBTSxjQUFjO0FBRXBCLFNBQVMsTUFBTTtBQUNiLFNBQU8sUUFBUSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3hEO0FBRU8sTUFBTSxnQkFBZ0I7QUFBQSxFQUMzQixjQUFjO0FBQ1osU0FBSyxZQUFZLENBQUM7QUFDbEIsU0FBSyxhQUFhO0FBQ2xCLFNBQUssS0FBSztBQUFBLEVBQ1o7QUFBQSxFQUVBLGFBQWEsT0FBTyxNQUFNO0FBQ3hCLFVBQU0sT0FBTztBQUFBLE1BQ1gsSUFBSSxJQUFJO0FBQUEsTUFDUixNQUFNLFFBQVEsWUFBWSxLQUFLLFVBQVUsU0FBUyxDQUFDO0FBQUEsTUFDbkQsWUFBVyxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUFBLE1BQ2xDO0FBQUEsSUFDRjtBQUNBLFNBQUssVUFBVSxLQUFLLElBQUk7QUFDeEIsU0FBSyxhQUFhLEtBQUs7QUFDdkIsU0FBSyxRQUFRO0FBQ2IsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLGVBQWUsSUFBSTtBQUNqQixTQUFLLFlBQVksS0FBSyxVQUFVLE9BQU8sVUFBUSxLQUFLLE9BQU8sRUFBRTtBQUM3RCxRQUFJLEtBQUssZUFBZSxHQUFJLE1BQUssYUFBYSxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxFQUFFLEtBQUs7QUFDN0YsU0FBSyxRQUFRO0FBQUEsRUFDZjtBQUFBLEVBRUEsWUFBWSxJQUFJO0FBQ2QsV0FBTyxLQUFLLFVBQVUsS0FBSyxVQUFRLEtBQUssT0FBTyxFQUFFLEtBQUs7QUFBQSxFQUN4RDtBQUFBLEVBRUEsYUFBYTtBQUNYLFdBQU8sS0FBSyxVQUFVLEVBQUUsU0FBUyxHQUFHLFdBQVcsS0FBSyxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDMUU7QUFBQSxFQUVBLFdBQVcsS0FBSztBQUNkLFVBQU0sU0FBUyxLQUFLLE1BQU0sR0FBRztBQUM3QixRQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sUUFBUSxPQUFPLFNBQVMsRUFBRyxPQUFNLElBQUksTUFBTSx3QkFBd0I7QUFDekYsU0FBSyxZQUFZLE9BQU8sVUFDckIsSUFBSSxXQUFTO0FBQUEsTUFDWixJQUFJLEtBQUssTUFBTSxJQUFJO0FBQUEsTUFDbkIsTUFBTSxLQUFLLFFBQVE7QUFBQSxNQUNuQixXQUFXLEtBQUssY0FBYSxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUFBLE1BQ3BELE9BQU8sS0FBSyxTQUFTLENBQUM7QUFBQSxJQUN4QixFQUFFO0FBQ0osU0FBSyxhQUFhLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxDQUFDLEVBQUUsS0FBSztBQUNqRSxTQUFLLFFBQVE7QUFBQSxFQUNmO0FBQUEsRUFFQSxVQUFVO0FBQ1IsaUJBQWEsUUFBUSxhQUFhLEtBQUssVUFBVTtBQUFBLE1BQy9DLFNBQVM7QUFBQSxNQUNULFdBQVcsS0FBSztBQUFBLE1BQ2hCLFlBQVksS0FBSztBQUFBLElBQ25CLENBQUMsQ0FBQztBQUFBLEVBQ0o7QUFBQSxFQUVBLE9BQU87QUFDTCxRQUFJO0FBQ0YsWUFBTSxTQUFTLEtBQUssTUFBTSxhQUFhLFFBQVEsV0FBVyxLQUFLLElBQUk7QUFDbkUsV0FBSyxZQUFZLE1BQU0sUUFBUSxPQUFPLFNBQVMsSUFBSSxPQUFPLFlBQVksQ0FBQztBQUN2RSxXQUFLLGFBQWEsT0FBTyxjQUFlLEtBQUssVUFBVSxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsRUFBRSxNQUFPO0FBQUEsSUFDeEYsU0FBUyxHQUFHO0FBQ1YsV0FBSyxZQUFZLENBQUM7QUFDbEIsV0FBSyxhQUFhO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
