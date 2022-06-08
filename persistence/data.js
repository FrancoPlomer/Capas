const config = require("../config");
const users = require("../models/users");
const { utils, mensajes } = require("../modules/utils");
const bcrypt = require("bcrypt");
const messages = require("../models/mensajes");


const data = new utils();
module.exports.allRandoms = (quantity) => {
    let arrayOfNumbers = [];
    let numActual = null;
    let count = 0;
    let repeats = {};
    const randomGenerate = data.generateRandoms(quantity);
    arrayOfNumbers = randomGenerate;
    arrayOfNumbers.sort(data.sortNumber);
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] != numActual) {
            if (count > 0) {
                if(repeats[arrayOfNumbers[i]])
                {
                    repeats[arrayOfNumbers[i]] = count;
                }
                else{
                    repeats[arrayOfNumbers[i]] = count;
                }
            }
            numActual = arrayOfNumbers[i];
            count = 1;
        } else {
            count++;
        }
    }
    return repeats;
}

module.exports.allProducts = () => {
    let allOfMyProducts;
    for(let i = 0; i < 5; i++)
    {   
        allOfMyProducts = data.generarCombinacion(i);
    }
    return allOfMyProducts;
}

module.exports.postMessage = async (message) => {
    const newMessage = message.mensaje;
    mensaje = {
        ... mensajes,
        text: {
            id: String(id),
            message: newMessage
        }
    }
    const newMessageToAddModel = new messages(mensaje);
    const newMessageAdded = await newMessageToAddModel.save()
        .then(async () => {
            async function allMessages () {
                const allOfMyMessagesMongo = await messages.find()
                .then((rows) => {
                    const MessagesTotal = rows.reduce((rowacc, row) => 
                    {
                        return rowacc = [...rowacc, row]
                    }
                    , [])
                    return MessagesTotal;
                })
                .catch((err) => console.log(err))       
                
                return allOfMyMessagesMongo;
            }
            const totalMessages = await allMessages();
            return totalMessages;
        }).catch((err) => {
            logger.error(`A ocurrido el siguiente error: ${err}`)
            console.log(err)
        })
        
    return newMessageAdded;
}

module.exports.allInfo = () => {
    return config.systemIfo;
}

module.exports.allLogin = () => {
    return 'login'
}

module.exports.allRegister = () => {
    return 'register'
}

module.exports.allLoginError = () => {
    return 'login-error'
}

module.exports.allLogOut = () => {
    return '/'
}

module.exports.allRegisterUP = async ( nombre, password, direccion ) => {
    const [newUser] = await users.find({user: nombre})

    if (newUser) {
        return 'register-error';
    } else {
        bcrypt.hash(password, 5, async function(err, hash) {
            const newUserToAddModel = new users({
                user: nombre,
                pass: hash,
                adress: direccion
            });
            await newUserToAddModel.save()
        });
        return '/login';
    }
}

module.exports.allData = ( user, adress ) => {
    const infoUser = {
        user: user,
        adress: adress
    }

    return (infoUser);
}

module.exports.allNoImplementada = (url, method) => {
    return `Ruta ${method} ${url} no implementada`;
}