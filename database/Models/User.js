const { DataTypes } = require('sequelize')
const { sequelize } = require('../GetConnection')

const User = sequelize.define('User', {
    id: {
        // if it is not defined, the sequelize will create one
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING, // STRING(255)
        defaultValue: 'Lucas'
    },
    abc_name_real_in_field: {
        type: DataTypes.INTEGER,
        field: 'age'
    },
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // unique: true
    }

    // Per Default, createdAt and updatedAt is created
}, {
    // Define more options for this model:
    charset: 'utf8'
})

// The name of table in db always will be a plural name of his model.

// This method sincronized the 'User' above in database, creating if it doesnt exist:
User.sync()

exports.user = User
