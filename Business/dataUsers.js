const minimist = require("minimist");
const FactoryDAOUser = require("../daos/factoryDaosUsers");
const UsersDto = require("../dto/usersDto");
const logger = require("../modules/logger");

const argv = minimist(process.argv.slice(2))
const { dao } = argv;
const data = FactoryDAOUser.get(dao);

module.exports.getRandomsControllers = async ( req, res ) => {
    try 
    {
        logger.info(`Usted ingreso a la ruta: ${req.route.path}. \n La peticion es del tipo: ${req.method}`)
        const quantity = req.query.cant;
        const datos = await data.getRandoms(quantity);
        res.send(datos);
    } catch (error) 
    {
        throw new Error(error)
    }
}

module.exports.getInfoController = async ( req, res ) => {
    try {
        logger.info(`Usted ingreso a la ruta: ${req.route.path}. \n La peticion es del tipo: ${req.method}`)
        const datos = await data.getInfo();
        res.send(datos);
    } catch (error) {
        console.log(error)
    }
}

module.exports.getLoginController = async ( req, res ) => {
    try {
        logger.info(`Usted ingreso a la ruta: ${req.route.path}. \n La peticion es del tipo: ${req.method}`)
        const datos = await data.getLogin();
        res.render(datos);
    } catch (error) {
        console.log(error)
    }
}

module.exports.getRegisterController = async ( req, res ) => {
    try {
        logger.info(`Usted ingreso a la ruta: ${req.route.path}. \n La peticion es del tipo: ${req.method}`)
        const datos = await data.getRegister();
        res.render(datos);
    } catch (error) {
        console.log(error)
    }
}

module.exports.getLoginErrorController = async ( req, res ) => {
    try {
        logger.info(`Usted ingreso a la ruta: ${req.route.path}. \n La peticion es del tipo: ${req.method}`)
        const datos = await data.getLoginError();
        res.render(datos);
    } catch (error) {
        console.log(error)
    }
}

module.exports.getRegisterUPController = async ( req, res ) => {
    try {
        logger.info(`Usted ingreso a la ruta: ${req.route.path}. \n La peticion es del tipo: ${req.method}`)
        const { nombre, password, direccion } = req.body;
        const datos = await data.getRegisterUP( nombre, password, direccion );

        if(datos === '/login') res.redirect(datos)
        else res.render(datos);
    } catch (error) {
        console.log(error)
    }
}

module.exports.getDataController = async ( req, res ) => {
    logger.info(`Usted ingreso a la ruta: ${req.route.path}. \n La peticion es del tipo: ${req.method}`)
    const datos = await data.getData( req.user[0].user, req.user[0].adress );
    const info = new UsersDto(datos)
    res.json(info);
}

module.exports.getLogOutController = async ( req, res ) => {
    logger.info(`Usted ingreso a la ruta: ${req.route.path}. \n La peticion es del tipo: ${req.method}`)
    const datos = await data.getLogOut();
    req.logOut();
    res.redirect(datos);
}

module.exports.getNoImplementadaController = async ( req, res ) => {
    const { url, method } = req;
    logger.warn(`Ruta ${method} ${url} no implementada`);
    const datos = await data.getNoImplementada(url, method);
    res.redirect(datos);
}