const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('rest_sequelize', 'postgres', '------', {
    dialect: "postgres",
    port: 5432,
    // '(...msg)': aloca quantos forem passagos valores em um array msg:
    // logging: (...msg) => console.log(msg),

    define: {
        charset: 'utf8'
    }
})

exports.sequelize = sequelize