export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public img?: string,
        public password?: string,
        public role?: string,
        public google?: boolean,
        public gender?: string,
        public uid?: string,
    ) {}

}
