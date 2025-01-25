import { MyJSON } from './json.js'
import { KeySortable } from './sortable.js';

KeySortable.init();

document.querySelector('#copyJSON').addEventListener('click', copyJsonToClipboard);

const numberOfIntendationSpaces = 2;

function copyJsonToClipboard() {
    navigator.clipboard.writeText(MyJSON.getJson(numberOfIntendationSpaces));
}
window.copyJsonToClipboard = copyJsonToClipboard;

function pasteJsonToEditor() {
    const jsonTextarea = document.querySelector('#json-textarea');
    jsonTextarea.value = MyJSON.getJson(numberOfIntendationSpaces);
}
pasteJsonToEditor();

export { pasteJsonToEditor };