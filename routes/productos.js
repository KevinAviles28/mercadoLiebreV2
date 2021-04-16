const express = require('express');
const router = express.Router();
const productosController=require('../controllers/productosController')
/* GET home page. */

router.get('/detalle/:id/:categoria',productosController.detalle);/* id? ="?" es igual a si tiene que ser opcional o no*/
module.exports = router;
