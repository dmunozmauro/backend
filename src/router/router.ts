import { Router, Request, Response } from "express";


const router = Router();
router.get('/familia', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Conexion establecida',
    });
});

router.get('/familia/:id', (req: Request, res: Response) => {
//    const id = req.param.id;
    res.json({
        ok: true,
        mensaje: 'Conexion establecida',
        id: id  
    });
});

export default router;