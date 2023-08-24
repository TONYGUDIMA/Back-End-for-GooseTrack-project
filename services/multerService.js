const fse = require("fs-extra");
const multer = require("multer");
const path = require("path");
const uuid = require("uuid").v4;
const jimp = require("jimp");

const AppError = require("../helpers/AppError");

exports.initUploadMiddleware = (name) => {
  const multerStorage = multer.memoryStorage();

  const multerFilter = (req, file, cbk) => {
    if (file.mimetype.startsWith("image/")) {
      cbk(null, true);
    } else {
      cbk(
        AppError(
          400,
          "Please, upload images only!"
        ),
        false
      );
    }
  };

  return multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  }).single(name);
};

exports.saveMulterImage = async (
  file,
  options,
  ...pathSegments
) => {
  if (
    file.size >
    (options?.maxSize || 10 * 1024 * 1024)
  )
    throw AppError(400, "File is too large..");

  const fileName = `${uuid()}.jpeg`;
  const fullFilePath = path.join(
    process.cwd(),
    "public",
    ...pathSegments
  );

  await fse.ensureDir(fullFilePath);
  const avatar = await jimp.read(file.buffer);
  await avatar
    .cover(
      options.width || 500,
      options.height || 500
    )
    .quality(90)
    .writeAsync(
      path.join(fullFilePath, fileName)
    );
  return path.join(...pathSegments, fileName);
};
