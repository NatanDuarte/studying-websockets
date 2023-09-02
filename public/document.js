import { emit } from "./socketAdapter.js";

const textEditor = document.querySelector('#text-editor');

if (textEditor) {
    textEditor.addEventListener('keyup', () => {
        emit(textEditor.value);
    });
}

function updateContent(content) {
    textEditor.value = content;
}

export { updateContent };
