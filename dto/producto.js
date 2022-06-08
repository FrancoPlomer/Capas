class Producto {
    #id;
    #nombre;
    #precio;
    #stock;
    #url;
    constructor({ id, name, price, stock, url }) {
        this.id = id
        this.nombre = name;
        this.precio = price;
        this.stock = stock;
        this.url = url;
    }
    get id() { return this.#id }
    set id(id) {
        console.log(id)
        if (!id) throw new Error('"id" es un campo requerido');
        this.#id = id;
    }
    get nombre() { return this.#nombre }
    set nombre(nombre) {
        if (!nombre) throw new Error('"nombre" es un campo requerido');
        this.#nombre = nombre;
        }
    get precio() { return this.#precio }
    set precio(precio) {
        if (!precio) throw new Error('"precio" es un campo requerido');
        if (isNaN(precio)) throw new Error('"precio" debe ser numérico');
        if (precio < 0) throw new Error('"precio" debe ser positivo');
        this.#precio = precio;
        }
    get stock() { return this.#stock }
    set stock(stock) {
        if (!stock) throw new Error('"stock" es un campo requerido');
        if (isNaN(stock)) throw new Error('"stock" debe ser numérico');
        if (stock < 0) throw new Error('"stock" debe ser positivo');
        this.#stock = stock;
        }
    get url() { return this.#url }

    set url(url){
        if (!url) throw new Error('"url" es un campo requerido');
        this.#url = url;
    }
}

module.exports = Producto;