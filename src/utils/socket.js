const { Server } = require('socket.io');

function setupSocket(server) {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log(`a user connected ${socket.id}`);

        socket.on('text_editor', (content) => {
            socket.broadcast.emit('text_for_clients', content);
        });

    });

    return io;
}

module.exports = setupSocket;
