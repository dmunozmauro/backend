import mysql from 'mysql';

export default class MySQL {

    cnn: mysql.Connection;
    conect: boolean = false;

    constructor() {
        console.log('BD iniciada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'node_db'
        });

        this.cnn.connect()
    }

    private conectarDB() {
        this.cnn.connect((error: mysql.MysqlError) => {
            if (error) {
                console.log(error.message);
                return;
            }
            this.conect = true;
            console.log('Base de datos conectada e iniciada');
        });
    }
}