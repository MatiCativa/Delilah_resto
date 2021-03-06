const LoginService = require('../service/login.service')
const { sign } = require('jsonwebtoken')
const config = require('../../config')

class LoginController {
    
    static async login(user, password) {
        const findUser = await LoginService.login(user, password)

        if (findUser.length) {
            const token = sign(findUser[0], config.JWT.PRIVATE_KEY)
                
            return token
        } else {
            return null
        }       
    }
}

module.exports = LoginController