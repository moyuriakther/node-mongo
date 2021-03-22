const express = require('express');


const app = express();

app.get('/', (req, res) => res.send('Welcome World Node js world'));

app.listen(3000, ()=>console.log('Listening to port 3000'));