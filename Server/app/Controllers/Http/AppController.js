'use strict'
const crypto = require('crypto');

class AppController {
    async index() {
        return {value:'USUÁRIO AUTENTICADO', response: true};
    }
}

module.exports = AppController
