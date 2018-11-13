"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conect = false;
        console.log('BD iniciada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_bd'
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.cnn.query('query', (err, results, fields) => {
            if (err) {
                console.log('Error en la query' + err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    }
    conectarDB() {
        this.cnn.connect((errorDb) => {
            if (errorDb) {
                console.log(errorDb.message);
                return;
            }
            this.conect = true;
            console.log('Base de datos conectada e iniciada');
        });
    }
}
exports.default = MySQL;
