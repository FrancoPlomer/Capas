const DaoMongo = require("./Dao");
let instance = null;
class FactoryDAO {
    static get(tipo){
        switch (tipo) {
            case 'mongo':
                if(!instance)
                {
                    instance = new DaoMongo();
                }
                return instance;
            default:
                if(!instance)
                {
                    instance = new DaoMongo();
                }
                return new DaoMongo();
        }
    }
}


module.exports = FactoryDAO