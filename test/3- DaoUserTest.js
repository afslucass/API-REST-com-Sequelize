
const { user } = require('../database/Models/User')

const createInstance = () => {
    // it is just a representation of a entity in the db (it is not still real)
    const lucas = user.build({ name: 'Lucas', abc_name_real_in_field: 17, username: 'lucasao' })

    console.log(lucas instanceof user) // true
    console.log(lucas.name)
    return lucas
}

const saveEntity = async () => {
    const lucas = user.build({ name: 'Lucas', abc_name_real_in_field: 17, username: 'lucasao' })
    await lucas.save()
}

const updateEntity = async () => {
    const lucas = user.build({ name: 'Lucas', abc_name_real_in_field: 17, username: 'lucasao' })
    await lucas.save()

    lucas.name = 'Maria'
    console.log(lucas.name) // The name changed in the instance, but not in the db

    await lucas.save() // Update 'lucas' in the db
    // await lucas.save({ fields: ['name', 'age'] }) -> save just some datas
}

const deleteEntity = async () => {
    const lucas = user.build({ name: 'Lucas', abc_name_real_in_field: 17, username: 'lucasao' })
    await lucas.save()

    await lucas.destroy()
}

const reloadInstance = async () => {
    const lucas = await user.create({ name: 'Lucas', abc_name_real_in_field: 17, username: 'lucasao' }) // build and save 
    lucas.name = 'Pedro'
    
    console.log(lucas.name) // Pedro
    await lucas.reload() // Reload with data from db
    console.log(lucas.name) // Lucas
}

const incrementAndDecrementIntegerValues = async () => {
    const lucas = await user.create({ name: 'Lucas', abc_name_real_in_field: 17, username: 'lucasao' })
    await lucas.increment({ 'age': 7 })
    await lucas.decrement({ 'age': 3 })
}

let lucas = createInstance()

saveEntity()

updateEntity()

reloadInstance()

deleteEntity()

incrementAndDecrementIntegerValues()
