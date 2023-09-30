import { emit, selectDocument } from "./socketAdapter.js";

const parameters = new URLSearchParams(window.location.search);
const documentName = parameters.get("name");

const textEditor = document.querySelector('#text-editor');
const documentTitle = document.querySelector('#document-title');

documentTitle.textContent = documentName || "Untitled document";

selectDocument(documentName);

if (textEditor) {
    textEditor.addEventListener('keyup', () => {
        emit({ content: textEditor.value, documentName: documentName });
    });
}

function updateContent(content) {
    textEditor.value = content;
}

export { updateContent };
