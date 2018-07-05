'use strict'

const express = require("express")

const router = express.Router()

const UserCtrl = require("../controllers/users")

router.get('/api/users', UserCtrl.index)

router.get('/api/users/:id',UserCtrl.show)

router.post('/api/users', UserCtrl.create)

router.put('/api/users/:id', UserCtrl.edit)

router.delete('/api/users/:id', UserCtrl.destroy)

module.exports = router