
const md5 = require('md5');

//加密中间件
const passwordMd = (req, res, next) => {
    let pwd = req.body.password;
    req.body.passwordMd = md5(pwd + md5(pwd.substr(0, 10)));
    next()
}

module.exports = passwordMd;