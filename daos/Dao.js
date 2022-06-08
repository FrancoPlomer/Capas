const 
{ allProducts, postMessage
} = require("../persistence/data")


class DaoMongo {
    async getProducts ()  {
        return await allProducts();
    }

    async postAddMessage (message) {
        return await postMessage(message);
    }
}

module.exports = DaoMongo;
