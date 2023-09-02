const { Server } = require('socket.io');

function setupSocket(server) {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log(`a user connected ${socket.id}`);
        
        socket.on('text_editor', (content) => {
            console.log(content);
        });
    });

    return io;
}

module.exports = setupSocket;
