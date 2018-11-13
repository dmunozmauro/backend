import Server from "./server/server";
import MySQL from "./mysql/mysql";
import router from "./router/router";

const server = Server.init(3000);
server.app.use(router);
server.start(() => {
    console.log('Corriendo en el puerto 3000');
});

/* const mysql = new MySQL(); */
/*const query = 'select * from prueba';
 MySQL.ejecutarQuery(query, (err:any, familia: Object[]) => {
    
}); */