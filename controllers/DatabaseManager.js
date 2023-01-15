const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/neew");
let users = mongoose.model('users', { name: "String", tel:"Number"})




class DatabaseManager {
    static #datas = [];
    static append(...vals) {
        for (const iterator of vals) {
            DatabaseManager.#datas.push(iterator);
        }
        let user = new users({ name: userName, tel: userTel })
        user.save().then(() => console.log('ready'))
    }
}

module.exports = DatabaseManager;
