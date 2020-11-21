
// REFERENCE: https://sequelize.org/master/manual/validations-and-constraints.html

const { sequelize } = require('../GetConnection')
const { DataTypes } = require('sequelize')

const User = sequelize.define('UsersWithValidationAndContraints', {
    user: {
        type: DataTypes.STRING(50),
        // Constraits:
        allowNull: false, // throw ValidationError 
        unique: true, // throw SequelizeUniqueConstraintError
    },

    email: {
        type: DataTypes.STRING,
        // Validation:
        validate: {
            isEmail: true,
            // isIPv6: false,
            // isUppercase: true,
            // isUrl: true,
            // is: /3[a-z]/, -> Allow REGEX
            // not: /3[a-z]/, -> Allow REGEX
            notEmpty: { args: true, msg: 'The Problem is because it is not Empty' }, // Custom Message Error
            // max: 20, min: 3 -> check for range of values
            
            CustomValidation(value) {
                if(value != value){
                    throw new Error('A error happaned')
                }
            }
        }
    }
})

async function testValidationAndContraints() {
    await User.sync()

    try {
        await User.create({user: 'lucasao', email: ''}) // throw error in email is notEmpty
    } catch(error) {
        console.log('-->')
        console.error('NameError: ' + error.name )
        console.error(error.message)
        console.log('--')
    }
    
    try{
        await User.create({user: 'maria', email: 'maria@email.com.br'})
        await User.create({user: 'maria', email: 'maria123@email.com.br'})
    } catch(error) {
        console.log('-->')
        console.error('NameError: ' + error.name )
        console.error(error.message)
        console.log('--')
    }

    await User.drop()
}   

testValidationAndContraints()