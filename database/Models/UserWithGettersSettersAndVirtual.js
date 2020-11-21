const { DataTypes } = require('sequelize')
const { sequelize } = require('../GetConnection')

function hash(value) {
    return 'This value is hashed -> ' + value
}

const otherUser = sequelize.define('UserWithGetterSetterAndVirtual', {
    // id is automatic

    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        
        set(value) {
            this.setDataValue('password', hash(value)) // it can be used to criptography and hash values 
        },
        get() {
            return this.getDataValue('password').toUpperCase()
        }
    },

    nameAndPassword: { // they are not really created in db
        type: DataTypes.VIRTUAL,
        
        get() {
            return this.name + ' ' + this.password
        },
        set(value) {
            throw new Error('Do not try to set this field')
        }
    }
})

// setDataValue and getDataValue substituem 'otherUser.value' para nao cousarem loop infinito


async function setAndGetValue() {
    await otherUser.sync()

    const user = await otherUser.create({name: 'Micaela', password: 'fofurinha'}) // used set

    // Only 'set' has a power of change the db, 'get' just define how value will be showed

    console.log(user.password) // used get
    console.log(user.nameAndPassword) // calling the virtual function

    await otherUser.drop()
}

setAndGetValue()

