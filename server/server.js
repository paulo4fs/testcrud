const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
// Rotas
app.use('/api/v1', routes);

app.listen(3333, () => console.log('listening on port 3333'));
