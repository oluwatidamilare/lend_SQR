"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
var config = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'user',
            password: 'password',
            database: 'lendsqr-trnx'
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        useNullAsDefault: true
    }
};
module.exports = config;
