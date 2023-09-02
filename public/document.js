const socket = io();

const textEditor = document.querySelector('#text-editor');

textEditor.addEventListener('keyup', () => {
    socket.emit("text_editor", textEditor.value);
});
