const base64 = require("base-64");
module.exports = (req, res, next) => {
  try {
    let basicHeaderParts = req.headers.authorization.split(" ");
    let encodedString = basicHeaderParts.pop();
    let decodedString = base64.decode(encodedString);
    const [username, password] = decodedString.split(":");
    req.body.username = username;
    req.body.password = password;
    next();
  } catch (e) {
    console.log(e);
  }
};
