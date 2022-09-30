import { getJson, keyify, deleteKey } from './json.js'
import { deleteLiElement, getSelected } from './dropdown.js';

const MDCTextField = mdc.textField.MDCTextField;

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

// EventListeners
document.querySelector('#copyJSON').addEventListener('click', btnCopyJSON);
document.querySelector('#deleteKey').addEventListener('click', btnDeleteKey);

/**
 * Number of spaces of intendation in the JSON string.
 */
let space = 2;

/**
 * Copies the JSON string into the clipboard of the user.
 */
function btnCopyJSON() {
    navigator.clipboard.writeText(getJson(space));
}

/**
 * Pastes the JSON string into the textarea.
 */
function pasteJSON() {
    textField.value = getJson(space);
}
pasteJSON();

/**
 * Deletes a key from JSON and the key dropdown
 */
function btnDeleteKey() {
    let selectedKey = getSelected();

    deleteKey(selectedKey);
    deleteLiElement(selectedKey);
    pasteJSON();
}