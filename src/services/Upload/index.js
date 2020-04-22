const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const savePath = `${process.cwd()}/public/_upload`;
    if (!fs.existsSync(savePath)) fs.mkdirSync(savePath);
    cb(null, savePath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

/**
 * Upload
 * @param {*} router express.Router()
 * @param {*} method 如 'GET'/'POST'等
 * @param {*} uri 如 '/upload'
 * @returns
 */
function Upload(router, method, uri) {
  const array = upload.array('file', 12);
  return router[method](uri, array, (req, res, next) => {
    if (req.files.length === 0) {
      res.send({
        code: -1,
        data: null,
        msg: '上传文件不能为空！',
      });
      return;
    }
    res.set({
      'Content-Type': 'application/json; charset=utf-8',
    });
    res.send({
      code: 0,
      data: null,
      msg: '上传文件成功！',
    });
    next();
  });
}

module.exports = Upload;
