require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const setupSocket = require('./utils/socket');


const app = express();
const server = http.createServer(app);
setupSocket(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', "index.html"));
});

const port = process.env.PORT;

server.listen(port, () => console.log(`running at http://localhost:${port}`));
