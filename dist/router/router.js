"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/familia', (req, res) => {
    const query = "select * from prueba";
    mysql_1.default.ejecutarQuery(query, (err, familia) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                familia: familia
            });
        }
    });
});
router.get('/familia/:id', (req, res) => {
    const id = req.params.id;
    const escapeId = mysql_1.default.instance.cnn.escape(id);
    const query = "select * from prueba where id =" + escapeId + ";";
    mysql_1.default.ejecutarQuery(query, (err, familia) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                familia: familia
            });
        }
    });
});
exports.default = router;
