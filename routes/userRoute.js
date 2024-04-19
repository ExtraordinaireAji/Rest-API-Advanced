const express = require('express')
const {getAllUsers, getOneUser, createOneUser, updateOneUser, deleteOneUser} = require('../controller/userController')
const router = express.Router()


router.route('/users').get(getAllUsers).post(createOneUser)
router.route('/users/:id').get(getOneUser).put(updateOneUser).delete(deleteOneUser)
module.exports = router