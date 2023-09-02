import { updateContent } from "./document.js";

const socket = io();

const emit = (content) => {
    socket.emit("text_editor", content);
}

socket.on('text_for_clients', (content) => {
    updateContent(content)
});

export { emit };
