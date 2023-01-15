let users = [];
console.log(users);
class User {
    constructor(name, phone){
        this.name = name;
        this.phone = phone;
    }
}

class DatabaseManager {
    static addUser(name, phone){
        console.log('2');
        users.push(new User(name, phone));
        console.log('3');
    }
}
module.exports = DatabaseManager;
