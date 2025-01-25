import { MyJSON } from './json.js'
import { KeySortable } from './sortable.js';

document.querySelector('#copyJSON').addEventListener('click', copyJsonToClipboard);
initSortableEventListener();

function initSortableEventListener() {
    document.querySelectorAll('.buttonDelete').forEach(icon => {
        icon.addEventListener('click', (e) => {
            deleteKey(e.currentTarget.getAttribute('data-path'));
        });
    })
}

const numberOfIntendationSpaces = 2;

function copyJsonToClipboard() {
    navigator.clipboard.writeText(MyJSON.getJson(numberOfIntendationSpaces));
}

function pasteJsonToEditor() {
    const jsonTextarea = document.querySelector('#json-textarea');
    jsonTextarea.value = MyJSON.getJson(numberOfIntendationSpaces);
}
pasteJsonToEditor();

/**
 * Deletes a key from the JSON string.
 */
function deleteKey(selectedKey) {
    MyJSON.deleteKey(selectedKey);
    KeySortable.refresh();
    initSortableEventListener();
    pasteJsonToEditor();
}

export { pasteJsonToEditor };