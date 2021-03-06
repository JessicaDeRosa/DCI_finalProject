const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// Create User
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/image');
    },

    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({
    storage: storage

});

router.post('/signup',userController.createUser);
router.post('/logIn',userController.logIn)


module.exports = router;