const usersDaoMongo = require("./usersDao");
let instance = null;

class FactoryDAOUser {
    static get(tipo){
        switch (tipo) {
            case 'mongo':
                if(!instance)
                {
                    instance = new usersDaoMongo();
                }
                return instance;
            default:
                if(!instance)
                {
                    instance = new usersDaoMongo();
                }
                return instance;
        }
    }
}


module.exports = FactoryDAOUser