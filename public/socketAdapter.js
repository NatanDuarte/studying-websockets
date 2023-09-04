import { updateContent } from "./document.js";

const socket = io();

const selectDocument = (name) => {
    socket.emit('document_selected', name);
}

const emit = (data) => {
    socket.emit("text_editor", data);
}

socket.on('text_for_clients', (content) => {
    updateContent(content)
});

export { emit, selectDocument };
