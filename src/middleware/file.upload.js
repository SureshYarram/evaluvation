const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname , "../uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueprefix = Date.now() + Math.random().toString();
      cb(null, `${uniqueprefix}-${file.originalname}`)
    }
  });
  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      }
       else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    },
    limits:{
             fileSize:1024*1024*5,
             
    }
  });

  module.exports = upload;

  
  