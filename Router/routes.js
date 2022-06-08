const { Router } = require('express');
const { 
    getProductsTestControllers 
} = require('../Business/data');
const 
{ 
    getRandomsControllers,
    getInfoController, getLoginController, 
    getRegisterController, getRegisterUPController, 
    getDataController, getLogOutController, 
    getNoImplementadaController, getLoginErrorController
} = require('../Business/dataUsers');

const routerDatos = new Router();

const isAuth = (req, res, next) => {
    if(req.isAuthenticated()){
        next()
    } else {
        res.redirect('/login')
    }
}

routerDatos.get('/randoms', getRandomsControllers);
routerDatos.get('/productos-test', getProductsTestControllers);
routerDatos.get('/info', getInfoController);
routerDatos.get('/login', getLoginController);
routerDatos.get('/register', getRegisterController);
routerDatos.get('/login-error', getLoginErrorController);
routerDatos.post('/register', getRegisterUPController);
routerDatos.get('/datos', isAuth, getDataController);
routerDatos.get('/logout', getLogOutController);
routerDatos.get('*', getNoImplementadaController);

module.exports = {routerDatos}