class Mensaje {
    #author;
    #text;
    constructor({ author, text }) {
        this.author = author;
        this.text = text;
    }
    get author() { return this.#author }
    set author(author) {
        if (!author) throw new Error('"author" es un campo requerido');
        this.#author = author;
    }
    get text() { return this.#text }
    set text(text) {
        if (!text) throw new Error('"text" es un campo requerido');
        this.#text = text;
        }

}

module.exports = Mensaje;