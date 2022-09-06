import { getJson } from './json.js'

const MDCTextField = mdc.textField.MDCTextField;

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

/**
 * Number of spaces of intendation in the JSON string.
 */
let space = 2;

/**
 * Pastes the JSON string into the textarea.
 */
function pasteJSON() {
    document.getElementById("textarea").innerHTML = getJson(space);
}
pasteJSON();