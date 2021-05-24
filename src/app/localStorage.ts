import { RootState } from '../data/store';

export function loadState() {
  try {
    const serialized = window.localStorage.getItem('state');
    if (serialized === null) {
      return undefined;
    }
    return JSON.parse(serialized);
  } catch (e) {
    return undefined;
  }
}

export function saveState(state: RootState) {
  try {
    const serialized = JSON.stringify(state);
    window.localStorage.setItem('state', serialized);
  } catch (e) {
    console.error(e);
  }
}
