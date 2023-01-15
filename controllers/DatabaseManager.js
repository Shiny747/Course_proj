const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/users");
let users = mongoose.model('users', { name: String, tel:Number})
 

class DatabaseManager {
    static #datas = [];
    static async append(...vals) {
        for (const iterator of vals) {
            DatabaseManager.#datas.push(iterator);
            let user = new users({ name: iterator.userName, tel: iterator.userTel })
            await user.save().then(() => console.log('saved'))
        }
    }
}

module.exports = DatabaseManager;
