import { getUserToken } from '../lib/userUtil'

export const kUrl: string = "http://27.35.18.238";

export function addQueryStringToken(url: string): string {
    let token = "";
    const userToken: string | null = getUserToken();

    if (null != userToken) {
        token += userToken;
    }

    return `${url}?token=${token}`;
}