const { Server } = require('socket.io');

function setupSocket(server) {
    const io = new Server(server, {
        cors: {
            origin: '*',
        },
    });

    io.on('connection', (socket) => {
        console.log(`a user connected ${socket.id}`);

        socket.on('document_selected', (documentName) => {
            socket.join(documentName);
        });

        socket.on('text_editor', ({ content, documentName }) => {
            socket.to(documentName).emit('text_for_clients', content);
        });
    });

    return io;
}

module.exports = setupSocket;
