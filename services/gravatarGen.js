const crypto = require("crypto");

function generateAvatarUrl(
  emailAddress,
  options = {}
) {
  const defaultImage =
    options.defaultImage || "wavatar";
  const emailHash = crypto
    .createHash("md5")
    .update(emailAddress)
    .digest("hex");
  return `https://www.gravatar.com/avatar/${emailHash}?d=${defaultImage}`;
}
module.exports = generateAvatarUrl;
