class DatabaseManager
{
    static #datas = [];
    static append(...vals)
    {
        for (const iterator of vals) {
        DatabaseManager.#datas.push(iterator);   
        }
    }
    static getAll()
    {
        return [...DatabaseManager.#datas];

    }
    static hasUser(userName, password)
    {
        for (const iterator of DatabaseManager.#datas) {
            console.log(iterator, userName, password);
            if(iterator.username == userName && iterator.password == password )
            return true;
        }
        return false;
    }
}

module.exports = DatabaseManager;