export function addToLocalStorage(key: string, value: unknown):void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

export function getFromLocalStorage<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
  
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error("Error reading from localStorage", error);
    return null;
  }
}

export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
}