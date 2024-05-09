const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const app = express();
const port = 43922;
const arreglo_usuarios = Array()
const arreglo_mails = Array()

// Allow all cross-origin requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
// Nuestra aplicación esta lista para recibir peticiones
app.get('/', (req, res) => {
        
        try{
            console.log(__dirname)
            res.sendFile(path.join(__dirname, 'index.html'));   
        } catch(e){
            res.status(500).send({'error': 'Internal server error'})
        }    
    }
);

app.post('/', (req, res) => {
const {usuario, email} = req.body;
arreglo_usuarios.push(usuario)
arreglo_mails.push(email)
console.log(usuarios)
console.log(mails)
res.status(201).send({usuario,email})
});

   
    

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);
});