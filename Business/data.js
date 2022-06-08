const minimist = require("minimist");
const FactoryDAO = require("../daos/factoryDao");
const Mensaje = require("../dto/mensajes");
const Producto  = require("../dto/producto");
const UsersDto = require("../dto/usersDto");
const logger = require("../modules/logger");

const argv = minimist(process.argv.slice(2))
const { dao } = argv;
const data = FactoryDAO.get(dao);

module.exports.getProductsTestControllers = async ( req, res ) => {
    try {
        logger.info(`Usted ingreso a la ruta: ${req.route.path}. \n La peticion es del tipo: ${req.method}`)
        const datos = await data.getProducts();
        res.send(new Producto(datos));
        
    } catch (error) {
        throw new Error(error)
    }
}

module.exports.postAddMessagesControllers = async ( newMessage ) => {
    try {
        const datos = await data.postAddMessage(newMessage);
        res.send(new Mensaje(datos));
    } catch (error) {
        throw new Error(error)
    }
}


