export class User {
    constructor(
        private _token: string,
        public login: string,
    ) {}

    get token() {
        return this._token
    }
}