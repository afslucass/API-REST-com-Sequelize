const express = require('express')
const router = express.Router()

const { dao } = require('../database/Dao/UserDao')
const { user } = require('../database/Models/User')

router.post('/pessoa', async (req, res, next) => {
    const model = user.build({
        name: req.body.name,
        abc_name_real_in_field: req.body.age,
        username: req.body.username
    })

    const status = await dao.saveEntity(model)
    if(status.hasError == true) {
        res.status(500).json({ 'status': status.message })
    } else {
        res.status(200).json({ 'status': status.message })
    }
})

router.get('/pessoa', async (req, res, next) => {
    const status = await dao.getEntities()
    if(status.hasError == true) {
        res.status(500).json({ 'status': status.message })
    } else {
        res.status(200).json(status.message)
    }
})

router.delete('/pessoa', async (req, res, next) => {
    const model = user.build({id: req.body.id})

    const status = await dao.deleteEntity(model)
    if(status.hasError == true) {
        res.status(500).json({ 'status': status.message })
    } else {
        res.status(200).json({ 'status': status.message })
    }
})

router.put('/pessoa', async (req, res ,next) => {
    const model = user.build({
        id: req.body.id,
        name: req.body.name,
        abc_name_real_in_field: req.body.age,
        username: req.body.username
    })

    const status = await dao.updateEntity(model)
    if(status.hasError == true) {
        res.status(500).json({ 'status': status.message })
    } else {
        res.status(200).json({ 'status': status.message })
    }
})

exports.router = router