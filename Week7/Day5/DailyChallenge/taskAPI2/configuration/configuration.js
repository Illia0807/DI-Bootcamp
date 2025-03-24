const path = require('path');
require('dotenv').config(); 

module.exports = {
        server:{
                PORT: process.env.PORT || 3222
        },
        
        files:{
                USERS_FILE: path.join(__dirname, '../users.json')
        },

        cypto:{
                BCRYPT_SALT_ROUNDS: 10
        }
        

       
    };