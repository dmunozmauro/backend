import { Router, Request, Response } from "express";
import MySQL from "../mysql/mysql";

const router = Router();

router.get('/familia', (req: Request, res: Response) => {
    const query = "select * from prueba";
    MySQL.ejecutarQuery(query, (err: any, familia: Object[]) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else {
            res.json(familia);
        }
    });
});

router.get('/familia/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const escapeId = MySQL.instance.cnn.escape(id);
    const query = "select * from prueba where id =" + escapeId + ";";
    MySQL.ejecutarQuery(query, (err: any, familia: Object[]) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else {
            res.json(familia);
        }
    });
});


router.post('/familia/insertar', (req: Request, res: Response) => {

    const queryInsert = "INSERT INTO prueba VALUES (10,'PRUEBA','PRUEBA','PRUEBA');";
    MySQL.ejecutarQuery(queryInsert, (err: any, familia: Object[]) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else {
            res.json(console.log('registro ingresado')
            );
        }
        
    });
});

export default router;