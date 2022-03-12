import { getLocalStorage } from './localStorage'
import { setLocalStorage } from '../lib/localStorage'
import { doLocationIndex } from './redirect'; 

export function isLoginUser(): Boolean {
    return null != getLocalStorage("token");
}

export function setLoginTokenAndRedirect(token: string): void {
    
    setLocalStorage("token", token);
    doLocationIndex();
}

export function getUserToken(): string | null {
    return getLocalStorage("token");
}