const { user } = require('../database/Models/User')

async function findByPrimaryKey(){
    const found = await user.findByPk(39)
    if(found === null){ // Estritamente igual
        console.log('Not found')
    } else {
        console.log(found.name + ' ' + found.id)
    }
}

async function findOne(){
    const found = await user.findOne({
        where: {
            name: 'Lucas'
        },
        order: [
            ['name', 'ASC']
        ]
    })

    console.log(found.name + ' ' + found.id)
}

async function findAndCountAll() {
    const { count, rows } = await user.findAndCountAll({
        where: {
            name: 'Lucas'
        }
    })
    console.log(count + ' ' + rows[0].name)
}

findByPrimaryKey()
findOne()
findAndCountAll()
