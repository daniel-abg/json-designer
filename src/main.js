import { MyJSON } from './json.js'
import { KeySortable } from './sortable.js';

const MDCTabBar = mdc.tabBar.MDCTabBar;
const MDCTextField = mdc.textField.MDCTextField;

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

document.querySelector('#copyJSON').addEventListener('click', copyJsonToClipboard);
document.querySelector('#pasteJSON').addEventListener('click', pasteJsonToEditor);
//document.querySelector('#buttonDeleteKey').addEventListener('click', deleteKey);
initSortableEventListener();

function initSortableEventListener() {
    document.querySelectorAll('.buttonDelete').forEach(icon => {
        icon.addEventListener('click', function(e) {
            console.log(e);
            deleteKey(e.path[1].attributes[0].value);
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
    //let selectedKey = KeyDropdown.getSelected();

    MyJSON.deleteKey(selectedKey);
    //KeyDropdown.refresh();
    KeySortable.refresh();
    initSortableEventListener();
    pasteJsonToEditor();
}