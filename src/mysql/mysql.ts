import mysql = require('mysql');

export default class MySQL {

    cnn: mysql.Connection;
    conect: boolean = false;
    private static _instance: MySQL;

    constructor() {
        console.log('BD iniciada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'node_bd'
        });

        this.conectarDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static ejecutarQuery(query:string, callback: Function) {
        this.instance.cnn.query(query, (err, results: Object[], fields) => {
            if(err) {
                console.log('Error en la query' + err);
                return callback(err);
            }
            if(results.length === 0) {
                callback('El registro solicitado no existe')
            } else {
            callback(null, results);
            }
        });
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