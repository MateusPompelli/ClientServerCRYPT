'use strict'

const User = use('App/Models/User')
const crypto = require('crypto');

class AuthController {
    async register({ request }) {
        let user
        let data = request.only(['username', 'email', 'password'])
        data.password = this.decrypted(data.password);
        user = await User.create(data)
        return user

    }

    async authenticate({ request, auth }) {
        let token
        let { email, password } = request.all()
        password = this.decrypted(password);
        token = await auth.attempt(email, password)
        return token

    }

    decrypted(data) {
        const algorithm = 'aes-192-cbc';
        const password = '9#zWF5NqO#F10n*M%3dCEszo';
        const key = crypto.scryptSync(password, 'salt', 24);
        const iv = Buffer.alloc(16, 0);
        const decipher = crypto.createDecipheriv(algorithm, key, iv);

        let decrypted = decipher.update(data, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted
    }

}

module.exports = AuthController
