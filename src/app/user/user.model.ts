export class User {
    constructor(
        private _token: string,
        public loggin: string,
    ) {}

    get token() {
        return this._token
    }
}