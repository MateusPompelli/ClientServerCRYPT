'use strict'
const crypto = require('crypto');

class DecryptedController {
    decrypted({ request }){
        const algorithm = 'aes-192-cbc';
        const password = '9#zWF5NqO#F10n*M%3dCEszo';
        const key = crypto.scryptSync(password, 'salt', 24);
        const iv = Buffer.alloc(16, 0);

        const decipher = crypto.createDecipheriv(algorithm, key, iv);

        const encrypted = 'a6d4784170439aa66a725888dc163355';
        let decrypted = decipher.update(encrypted, 'utf8','hex');
        decrypted += decipher.final('hex');
        return decrypted
    }
}

module.exports = DecryptedController
