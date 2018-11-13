"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/familia', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Conexion establecida',
    });
});
router.get('/familia/:id', (req, res) => {
    const id = req.param.id;
    res.json({
        ok: true,
        mensaje: 'Conexion establecida',
        id: id
    });
});
exports.default = router;
