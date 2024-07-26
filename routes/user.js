const express = require("express");
const router = express.Router();
const { handleUserSignUp, handleUserLogin } = require("../controllers/user");
const multer = require("multer");
// const upload = multer({ dest: "upload/" });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './upload');
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({ storage });

router.post("/signup", upload.single('Profile-Img'), handleUserSignUp);
router.post("/login", handleUserLogin)


module.exports = router;