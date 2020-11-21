const { user } = require('../database/Models/User')

async function createAndSyncUser() {
    try {
        await user.sync()
        console.log('Everything is right')
    } catch(error) {
        console.error('user lauched an error')
    }
}

createAndSyncUser()