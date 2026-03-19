import { msgType, msgChannel, msgNumber } from "../lib/midi.js";
const STORAGE_KEY = "scoops:midi-bindings";
class MidiLearn {
  constructor(midiAccess) {
    this.midiAccess = midiAccess;
    this.bindings = [];
    this.actions = {};
    this.learning = null;
    this.onBound = null;
    this.load();
  }
  startLearn(controlId) {
    this.learning = controlId;
  }
  cancelLearn() {
    this.learning = null;
  }
  bind(controlId, descriptor) {
    this.bindings = this.bindings.filter((item) => item.controlId !== controlId);
    this.bindings.push({ controlId, ...descriptor });
    this.save();
  }
  unbind(controlId) {
    this.bindings = this.bindings.filter((item) => item.controlId !== controlId);
    this.save();
  }
  setActions(actions) {
    this.actions = actions || {};
  }
  dispatch(data) {
    const type = msgType(data);
    if (type === "other") return null;
    const descriptor = {
      type,
      channel: msgChannel(data),
      number: msgNumber(data)
    };
    if (this.learning) {
      this.bind(this.learning, descriptor);
      if (typeof this.onBound === "function") this.onBound(this.learning, descriptor);
      this.learning = null;
      return null;
    }
    const binding = this.bindings.find((item) => item.type === descriptor.type && item.channel === descriptor.channel && item.number === descriptor.number);
    if (!binding) return null;
    const action = this.actions[binding.controlId];
    if (action) action(data);
    return binding.controlId;
  }
  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.bindings));
  }
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = JSON.parse(raw || "[]");
      if (Array.isArray(parsed)) this.bindings = parsed;
    } catch (e) {
      this.bindings = [];
    }
  }
}
export {
  MidiLearn
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvbWlkaS1sZWFybi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgbXNnVHlwZSwgbXNnQ2hhbm5lbCwgbXNnTnVtYmVyIH0gZnJvbSAnLi4vbGliL21pZGkuanMnO1xuXG5jb25zdCBTVE9SQUdFX0tFWSA9ICdzY29vcHM6bWlkaS1iaW5kaW5ncyc7XG5cbmV4cG9ydCBjbGFzcyBNaWRpTGVhcm4ge1xuICBjb25zdHJ1Y3RvcihtaWRpQWNjZXNzKSB7XG4gICAgdGhpcy5taWRpQWNjZXNzID0gbWlkaUFjY2VzcztcbiAgICB0aGlzLmJpbmRpbmdzID0gW107XG4gICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgdGhpcy5sZWFybmluZyA9IG51bGw7XG4gICAgdGhpcy5vbkJvdW5kID0gbnVsbDtcbiAgICB0aGlzLmxvYWQoKTtcbiAgfVxuXG4gIHN0YXJ0TGVhcm4oY29udHJvbElkKSB7XG4gICAgdGhpcy5sZWFybmluZyA9IGNvbnRyb2xJZDtcbiAgfVxuXG4gIGNhbmNlbExlYXJuKCkge1xuICAgIHRoaXMubGVhcm5pbmcgPSBudWxsO1xuICB9XG5cbiAgYmluZChjb250cm9sSWQsIGRlc2NyaXB0b3IpIHtcbiAgICB0aGlzLmJpbmRpbmdzID0gdGhpcy5iaW5kaW5ncy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvbnRyb2xJZCAhPT0gY29udHJvbElkKTtcbiAgICB0aGlzLmJpbmRpbmdzLnB1c2goeyBjb250cm9sSWQsIC4uLmRlc2NyaXB0b3IgfSk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICB1bmJpbmQoY29udHJvbElkKSB7XG4gICAgdGhpcy5iaW5kaW5ncyA9IHRoaXMuYmluZGluZ3MuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb250cm9sSWQgIT09IGNvbnRyb2xJZCk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBzZXRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zIHx8IHt9O1xuICB9XG5cbiAgZGlzcGF0Y2goZGF0YSkge1xuICAgIGNvbnN0IHR5cGUgPSBtc2dUeXBlKGRhdGEpO1xuICAgIGlmICh0eXBlID09PSAnb3RoZXInKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgdHlwZSxcbiAgICAgIGNoYW5uZWw6IG1zZ0NoYW5uZWwoZGF0YSksXG4gICAgICBudW1iZXI6IG1zZ051bWJlcihkYXRhKSxcbiAgICB9O1xuICAgIGlmICh0aGlzLmxlYXJuaW5nKSB7XG4gICAgICB0aGlzLmJpbmQodGhpcy5sZWFybmluZywgZGVzY3JpcHRvcik7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub25Cb3VuZCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5vbkJvdW5kKHRoaXMubGVhcm5pbmcsIGRlc2NyaXB0b3IpO1xuICAgICAgdGhpcy5sZWFybmluZyA9IG51bGw7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgYmluZGluZyA9IHRoaXMuYmluZGluZ3MuZmluZChpdGVtID0+IChcbiAgICAgIGl0ZW0udHlwZSA9PT0gZGVzY3JpcHRvci50eXBlXG4gICAgICAmJiBpdGVtLmNoYW5uZWwgPT09IGRlc2NyaXB0b3IuY2hhbm5lbFxuICAgICAgJiYgaXRlbS5udW1iZXIgPT09IGRlc2NyaXB0b3IubnVtYmVyXG4gICAgKSk7XG4gICAgaWYgKCFiaW5kaW5nKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbnNbYmluZGluZy5jb250cm9sSWRdO1xuICAgIGlmIChhY3Rpb24pIGFjdGlvbihkYXRhKTtcbiAgICByZXR1cm4gYmluZGluZy5jb250cm9sSWQ7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeSh0aGlzLmJpbmRpbmdzKSk7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyB8fCAnW10nKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlZCkpIHRoaXMuYmluZGluZ3MgPSBwYXJzZWQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5iaW5kaW5ncyA9IFtdO1xuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxTQUFTLFlBQVksaUJBQWlCO0FBRS9DLE1BQU0sY0FBYztBQUViLE1BQU0sVUFBVTtBQUFBLEVBQ3JCLFlBQVksWUFBWTtBQUN0QixTQUFLLGFBQWE7QUFDbEIsU0FBSyxXQUFXLENBQUM7QUFDakIsU0FBSyxVQUFVLENBQUM7QUFDaEIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssVUFBVTtBQUNmLFNBQUssS0FBSztBQUFBLEVBQ1o7QUFBQSxFQUVBLFdBQVcsV0FBVztBQUNwQixTQUFLLFdBQVc7QUFBQSxFQUNsQjtBQUFBLEVBRUEsY0FBYztBQUNaLFNBQUssV0FBVztBQUFBLEVBQ2xCO0FBQUEsRUFFQSxLQUFLLFdBQVcsWUFBWTtBQUMxQixTQUFLLFdBQVcsS0FBSyxTQUFTLE9BQU8sVUFBUSxLQUFLLGNBQWMsU0FBUztBQUN6RSxTQUFLLFNBQVMsS0FBSyxFQUFFLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0MsU0FBSyxLQUFLO0FBQUEsRUFDWjtBQUFBLEVBRUEsT0FBTyxXQUFXO0FBQ2hCLFNBQUssV0FBVyxLQUFLLFNBQVMsT0FBTyxVQUFRLEtBQUssY0FBYyxTQUFTO0FBQ3pFLFNBQUssS0FBSztBQUFBLEVBQ1o7QUFBQSxFQUVBLFdBQVcsU0FBUztBQUNsQixTQUFLLFVBQVUsV0FBVyxDQUFDO0FBQUEsRUFDN0I7QUFBQSxFQUVBLFNBQVMsTUFBTTtBQUNiLFVBQU0sT0FBTyxRQUFRLElBQUk7QUFDekIsUUFBSSxTQUFTLFFBQVMsUUFBTztBQUM3QixVQUFNLGFBQWE7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsU0FBUyxXQUFXLElBQUk7QUFBQSxNQUN4QixRQUFRLFVBQVUsSUFBSTtBQUFBLElBQ3hCO0FBQ0EsUUFBSSxLQUFLLFVBQVU7QUFDakIsV0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVO0FBQ25DLFVBQUksT0FBTyxLQUFLLFlBQVksV0FBWSxNQUFLLFFBQVEsS0FBSyxVQUFVLFVBQVU7QUFDOUUsV0FBSyxXQUFXO0FBQ2hCLGFBQU87QUFBQSxJQUNUO0FBQ0EsVUFBTSxVQUFVLEtBQUssU0FBUyxLQUFLLFVBQ2pDLEtBQUssU0FBUyxXQUFXLFFBQ3RCLEtBQUssWUFBWSxXQUFXLFdBQzVCLEtBQUssV0FBVyxXQUFXLE1BQy9CO0FBQ0QsUUFBSSxDQUFDLFFBQVMsUUFBTztBQUNyQixVQUFNLFNBQVMsS0FBSyxRQUFRLFFBQVEsU0FBUztBQUM3QyxRQUFJLE9BQVEsUUFBTyxJQUFJO0FBQ3ZCLFdBQU8sUUFBUTtBQUFBLEVBQ2pCO0FBQUEsRUFFQSxPQUFPO0FBQ0wsaUJBQWEsUUFBUSxhQUFhLEtBQUssVUFBVSxLQUFLLFFBQVEsQ0FBQztBQUFBLEVBQ2pFO0FBQUEsRUFFQSxPQUFPO0FBQ0wsUUFBSTtBQUNGLFlBQU0sTUFBTSxhQUFhLFFBQVEsV0FBVztBQUM1QyxZQUFNLFNBQVMsS0FBSyxNQUFNLE9BQU8sSUFBSTtBQUNyQyxVQUFJLE1BQU0sUUFBUSxNQUFNLEVBQUcsTUFBSyxXQUFXO0FBQUEsSUFDN0MsU0FBUyxHQUFHO0FBQ1YsV0FBSyxXQUFXLENBQUM7QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
