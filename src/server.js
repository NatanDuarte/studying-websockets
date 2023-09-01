require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', "index.html"));
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

const port = process.env.PORT;

server.listen(port, () => console.log(`running at http://localhost:${port}`));
