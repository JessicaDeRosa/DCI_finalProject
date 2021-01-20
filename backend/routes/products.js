const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
// Multer setup
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads');
    },

    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({
    storage: storage

});

// Create product
router.post('/add',productController.createProduct);
router.post('/pictureAdd',productController.uploadPicture);
router.get('/findProduct',productController.findProduct);

module.exports = router;