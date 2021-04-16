const fs = require('fs');//modulo nativo de node

module.exports = JSON.parse(fs.readFileSync(__dirname + '/productsDataBase.json','utf-8'));