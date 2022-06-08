const { faker } = require('@faker-js/faker');
const { Server: IOServer } = require('socket.io');
const messages = require('../models/mensajes');


let mensajes = {}
let productos = {}
let id = 0;

class utils {
        
    print(objeto){
        console.log(util.inspect(objeto, false, 12, true))
    }
    
    generarCombinacion(id){
        return {
            id,
            name: faker.commerce.product(),
            price: faker.commerce.price(100),
            stock: faker.datatype.number({ min: 1000000 }),
            url: faker.image.image(),
        }
    }
    
    sortNumber(a,b){
        return a - b;
    }
    
    generateRandoms(quantity){
        let arrayOfNumbers = [];
        for (let index = 0; index < quantity; index++) {
            arrayOfNumbers.push(parseInt(Math.random() * (1001 - 1) + 1))
        }
        return arrayOfNumbers;
    }
    
}



module.exports = {mensajes, productos, id, utils}