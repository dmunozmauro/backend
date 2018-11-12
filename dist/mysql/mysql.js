"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class MySQL {
    constructor() {
        this.conect = false;
        console.log('BD iniciada');
        this.cnn = mysql_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'node_db'
        });
        this.cnn.connect();
    }
    conectarDB() {
        this.cnn.connect((error) => {
            if (error) {
                console.log(error.message);
                return;
            }
            this.conect = true;
            console.log('Base de datos conectada e iniciada');
        });
    }
}
exports.default = MySQL;
