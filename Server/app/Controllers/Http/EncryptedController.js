'use strict'
const crypto = require('crypto');

class EncryptedController {
    async encrypted({ request }) {
        try {
            let data = request.params;
            const algorithm = 'aes-192-cbc';
            const password = '9#zWF5NqO#F10n*M%3dCEszo';
            const key = crypto.scryptSync(password, 'salt', 24);
            const iv = Buffer.alloc(16, 0);

            const cipher = crypto.createCipheriv(algorithm, key, iv);

            let encrypted = cipher.update(data.data, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            return {
                response: true,
                value: encrypted
            }
        } catch{
            return {
                response: false,
                message: 'Falha ao criptografar'
            }
        }

    }
}

module.exports = EncryptedController
