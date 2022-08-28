const db = require("./configuration")

function getAll(table, callback) {
    db.query(`SELECT * FROM ${table}`, (error, results, fields) => {
        if (error) {
            callback(error)
            console.log(error)
        }
        callback(null, results)
    })
}

function getById(table, id, callback) {
    db.query(`SELECT * FROM ${table} WHERE id=${id}`, (error, results, fields) => {
        if (error) {
            callback(error)
            console.log(error)
        }
        console.log(results);
        callback(null, results)
    })
}

function create(table, item, callback) {
    const keys = Object.keys(item)
    const properties = keys.join(", ")
    const values = Object.entries(item).map(([key, value]) => `'${value}'`).join(", ")

    db.query(`INSERT INTO ${table} (${properties}) VALUES (${values})`, (error, results, fields) => {
        if (error) {
            callback(error)
            console.log(error)
        }
        console.log(results);
        callback(null, results)
    })
}

function update(table, id, item, callback) {
    const keys = Object.keys(item)
    const values = keys.map(key => `${key} = '${item[key]}'`).join(', ')

    db.query(`UPDATE ${table} SET ${values} WHERE id=${id}`, (error, results, fields) => {
        if (error) {
            callback(error)
            console.log(error)
        }
        console.log(results);
        callback(null, results)
    })
}

function deleteItem(table, id, callback) {
    db.query(`DELETE FROM ${table} WHERE id = ${id}`, (error, results, fields) => {
        if (error) {
            callback(error)
            console.log(error)
        }
        console.log(results);
        callback(null, results)
    })
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteItem
}