const express = require('express')
const {getAllServicess, getOneService, createOneService, updateOneService, deleteOneService} = require('../controller/serviceController')
const router = express.Router()


router.route('/services').get(getAllServicess).post(createOneService)

router.route('/services/:id').get(getOneService).put(updateOneService).delete(deleteOneService)

module.exports = router