const jwt = require('jsonwebtoken')

const jwtKey = 'mycoolsecretkey'

exports.verify = (token) => {
  try {
    jwt.verify(token, jwtKey)
  } catch (e) {
    return false
  }
  return true
}
exports.createToken = () => jwt.sign({}, jwtKey, {expiresIn: '1 day'})
