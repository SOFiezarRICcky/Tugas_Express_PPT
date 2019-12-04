const express = require('express');
const homeController = require("../controller/homeController")
const router = express.Router();

router.post('/proses', homeController.prosesPost)

router.post('/proses', homeController.prosesGet)

router.post('/proses/:id', homeController.prosesParams)

module.exports = router;