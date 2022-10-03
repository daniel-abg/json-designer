import MyJSON from './json.js'
import { deleteLiElement, getSelected } from './dropdown.js';

const MDCTextField = mdc.textField.MDCTextField;
const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));

// EventListeners
document.querySelector('#copyJSON').addEventListener('click', btnCopyJSON);
document.querySelector('#deleteKey').addEventListener('click', btnDeleteKey);

/**
 * Number of spaces of intendation in the JSON string.
 */
let intendationSpaces = 2;

/**
 * Copies the JSON string into the clipboard of the user.
 */
function btnCopyJSON() {
    navigator.clipboard.writeText(MyJSON.getJson(intendationSpaces));
}

/**
 * Pastes the JSON string into the textarea.
 */
function pasteJSON() {
    textField.value = MyJSON.getJson(intendationSpaces);
}
pasteJSON();

/**
 * Deletes a key from JSON and the key dropdown
 */
function btnDeleteKey() {
    let selectedKey = getSelected();

    MyJSON.deleteKey(selectedKey);
    deleteLiElement(selectedKey);
    pasteJSON();
}