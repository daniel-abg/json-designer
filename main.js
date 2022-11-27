import { MyJSON } from './json.js'
// import { KeyDropdown } from './dropdown.js';
import { KeySortable } from './sortable.js';

const MDCTextField = mdc.textField.MDCTextField;
const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));

// EventListeners
document.querySelector('#copyJSON').addEventListener('click', copyJSON);
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

/**
 * Number of spaces of intendation in the JSON string.
 */
let intendationSpaces = 2;

/**
 * Copies the JSON string into the clipboard of the user.
 */
function copyJSON() {
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
 * Deletes a key from the JSON string.
 */
function deleteKey(selectedKey) {
    //let selectedKey = KeyDropdown.getSelected();

    MyJSON.deleteKey(selectedKey);
    //KeyDropdown.refresh();
    KeySortable.refresh();
    initSortableEventListener();
    pasteJSON();
}