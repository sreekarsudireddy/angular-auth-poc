import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    private token: string = null;

    get loginStatus(): boolean {
        this.getCookieToken();
        if (this.token === null) {
            return false;
        }
        return true;
    }

    constructor() { }
    /**
     *  Sets the x-csrf-token
     * @param token
     */
    setToken(token: string) {
        this.removeTokenCookie();
        this.token = token;
        document.cookie = 'jwt-token=' + token + '; path=/;';
    }

    /**
     *  Gets the x-csrf-token
     */
    getToken(): string {
        this.getCookieToken();
        return this.token;
    }

    private getCookieToken() {
        this.token = null;
        if (document.cookie) {
            const v = document.cookie.split(';');
            for (const x of v) {
                if (x.indexOf('jwt-token') >= 0) {
                    const token = x.replace('jwt-token=', '');
                    this.token = token;
                    break;
                }
            }
        }
    }

    logOut() {
        this.removeTokenCookie();
    }

    removeTokenCookie() {
        this.token = null;
        document.cookie = 'jwt-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
}
