import mysql = require('mysql');

export default class MySQL {

    cnn: mysql.Connection;
    conect: boolean = false;
    private static _instance: MySQL;

    constructor() {
        console.log('BD iniciada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });

        this.cnn.connect();
    }

    private conectarDB() {
        this.cnn.connect((errorDb: mysql.MysqlError) => {
            if (errorDb) {
                console.log(errorDb.message);
                return;
            }
            this.conect = true;
            console.log('Base de datos conectada e iniciada');
        });
    }
}