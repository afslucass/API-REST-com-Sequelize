const { sequelize } = require('../database/GetConnection')

const testingGetConnection = async function() {
    try{
        await sequelize.authenticate()
        console.log('All right with GetConnection')
        await sequelize.close()
    } catch(error){
        console.error('something wrong with GetConnection')
    }
}()