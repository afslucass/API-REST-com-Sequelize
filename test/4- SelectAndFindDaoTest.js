
const { user } = require('../database/Models/User')
const { Op } = require('sequelize') // enables the where OPerations

async function findAll(){
    const users = await user.findAll() // Retorna um JSON
    users.forEach( (user, index) => console.log(index + '. ' + user.name + ' - ' + user.updatedAt))

    // const users = await user.findAll(
    //      attributes: ['name', 'id']     
    // )
}

async function whereClauses(){
    const users = await user.findAll({
        where: {
            name: 'Lucas', // AND
            id: {
                [Op.lt]: 50 // less than
            }
        }
    })
}

async function count(){
    const users = await user.count()
    console.log(users)
}

async function deleteUser(){
    const userToDelete = await user.destroy({
        where: {
            name: {
                [Op.not]: 'Joaquim'
            }
        }
    })
}

async function updateUser(){
    const userToUpdate = user.update({
        name: 'Joaquim'
    }, {
        where: {
            [Op.or]: [
                { name: 'Lucas' },
                { username: 'lucao' }  
            ]
        }
    })
}

findAll()
whereClauses()
count()
updateUser()
deleteUser()


// Read more about Op on https://sequelize.org/master/manual/model-querying-basics.html