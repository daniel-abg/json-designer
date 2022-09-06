import { getJson } from './json.js'

const MDCTextField = mdc.textField.MDCTextField;

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

// EventListeners
document.querySelector('#copyJSON').addEventListener('click', copyJSON)

/**
 * Number of spaces of intendation in the JSON string.
 */
let space = 2;

/**
 * Copies the JSON string into the clipboard of the user.
 */
function copyJSON() {
    navigator.clipboard.writeText(getJson(space));
}

/**
 * Pastes the JSON string into the textarea.
 */
function pasteJSON() {
    document.getElementById("textarea").innerHTML = getJson(space);
}
pasteJSON();