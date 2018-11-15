"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql"));
const router = express_1.Router();
router.post('/familia/insertar', (req, res) => {
    const queryInsert = "INSERT INTO prueba VALUES (10,'PRUEBA','PRUEBA','PRUEBA')";
    mysql_1.default.ejecutarQuery(queryInsert, () => {
        console.log('OK - registro ingresado');
    });
});
exports.default = router;
