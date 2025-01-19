import { MyJSON } from './json.js'
import { KeySortable } from './sortable.js';

const MDCTabBar = mdc.tabBar.MDCTabBar;
const MDCTextField = mdc.textField.MDCTextField;

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

document.querySelector('#copyJSON').addEventListener('click', copyJsonToClipboard);
document.querySelector('#pasteJSON').addEventListener('click', pasteJsonToEditor);
initSortableEventListener();

function initSortableEventListener() {
    document.querySelectorAll('.buttonDelete').forEach(icon => {
        icon.addEventListener('click', function(e) {
            deleteKey(e.target.attributes[1].value);
        });
    })
}

const numberOfIntendationSpaces = 2;

function copyJsonToClipboard() {
    navigator.clipboard.writeText(MyJSON.getJson(numberOfIntendationSpaces));
}

function pasteJsonToEditor() {
    textField.value = MyJSON.getJson(numberOfIntendationSpaces);
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