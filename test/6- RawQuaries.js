const { QueryTypes } = require('sequelize')
const { sequelize } = require('../database/GetConnection')

async function testSimple() {
    // [results, metadata] -> other dbs , results -> mysql
    const results = await sequelize.query('SELECT * FROM users', { type: QueryTypes.SELECT })

    //console.log(results) 
}

async function testResplacements() {
    // [results, metadata] -> other dbs , results -> mysql
    const results = await sequelize.query('SELECT * FROM users WHERE UPPER(name) = UPPER(:name)', { 
        type: QueryTypes.SELECT,
        replacements: { name: 'Joaquim' }
    })

    console.log(results) 
}

async function testAdd() {
    const results = await sequelize.query('INSERT INTO users (name, age, username) VALUES ("Joana", 12, "joanaabc")', { 
        type: QueryTypes.INSERT,
    })
}

testSimple()
testResplacements()
testAdd()