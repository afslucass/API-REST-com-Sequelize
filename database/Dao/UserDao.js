const { user } = require('../Models/User')

const getEntities = async () => {
    let model
    try { model = await user.findAll() } catch(error) { return { hasError: true, message: error.message }}

    return { hasError: false, message: model }
}

const saveEntity = async (entity) => {
    try { await entity.save() } catch(error) { return { hasError: true, message: error.message } }

    return { hasError: false, message: 'Saved' }
}

const updateEntity = async (entity) => {
    try { 
        const modelUpdated = await user.update({
            name: entity.name,
            abc_name_real_in_field: entity.abc_name_real_in_field,
            username: entity.username
            }, {
                where: {
                    id: entity.id
                }
        })
    } catch(error) {
        return { hasError: true, message: error.message }
    }

    return { hasError: false, message: 'Updated'}
}

const deleteEntity = async (entity) => {
    try {
        const modelToBeDeleted = await user.destroy({ 
            where: {
                id: entity.id
            }
        })
    } catch(error) {
        return { hasError: true, message: error.message }
    }

    return { hasError: false, message: 'Deleted' }
}

exports.dao = {
    'getEntities': getEntities,
    'deleteEntity': deleteEntity, 
    'updateEntity': updateEntity,
    'saveEntity': saveEntity,
}

