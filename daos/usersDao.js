const 
{ allRandoms, allProducts, 
    allInfo, allLogin, 
    allRegister, allLoginError, 
    allRegisterUP, allData, 
    allLogOut,
    allNoImplementada
} = require("../persistence/data")


class usersDaoMongo {
    async getRandoms(quantity) { 
        return await allRandoms(quantity);
    }
        
    async getInfo ()  {
        return await allInfo();
    }
    
    async getLogin ()  {
        return await allLogin();
    }
    
    async getRegister ()  {
        return await allRegister();
    }
    
    async getLoginError ()  {
        return await allLoginError();
    }
    
    async getRegisterUP ( nombre, password, direccion )  {
        return await allRegisterUP( nombre, password, direccion );
    }
    
    async getData ( user, adress )  {
        return await allData( user, adress );
    }
    
    async getLogOut ()  {
        return await allLogOut();
    }
    
    async getNoImplementada (url, method)  {
        return await allNoImplementada(url, method);
    }
}

module.exports = usersDaoMongo;
