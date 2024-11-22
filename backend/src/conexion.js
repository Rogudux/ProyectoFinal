import dotenv from 'dotenv';
dotenv.config();


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_CLUSTER = process.env.DB_CLUSTER;
console.log(DB_USER)
const conexion = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}`;

//const conexion = `mongodb+srv://basti13579:pXcipvZOIlRGJSaO@basti.hcpua.mongodb.net/TiendaVirtual`

//module.exports = conexion;

export default conexion;

