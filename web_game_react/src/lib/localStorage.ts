export function setLocalStorage(name: string, value: string): void {
    window.localStorage.setItem(name, value);
}

export function getLocalStorage(name: string): string | null {
    return window.localStorage.getItem(name);
}