import express from "express";
import {dirname, join} from "path";
import {fileURLToPath} from "url"
import indexRoute from './routes/index.js'
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url)) //ruta absoluta
console.log(__dirname, '/views')
console.log(join(__dirname,'views'))
app.set('views', join(__dirname,'views'));

app.set('view engine', 'ejs'); //archivo de la vista
app.use(indexRoute)
app.use(express.static(join(__dirname,'public')))

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`Server is listening on port ${port}`);
    console.log(`Click here to open the app: ${url}`);
});

// Manejo de errores en caso de que el puerto no esté disponible
app.on('error', (err) => {
    console.error(`Error starting server: ${err.message}`);
});

app.use(express.static('public'));
