const express = require('express');
const router = express.Router();
const { Controller } = require('../router/Controllers/Register-Controller')
// type 1 
// router.get('/', (req, res) => {
//     res.status(200).send("Sending the response from router");
// });

//type 2

router.route('/').post(Controller.register);

module.exports = router