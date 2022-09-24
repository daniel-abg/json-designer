import { getJson, keyify, deleteKey } from './json.js'

const MDCTextField = mdc.textField.MDCTextField;
const MDCSelect = mdc.select.MDCSelect;

// The dropdown needs to be filled before the MDCSelect gets instantiated
fillDropdownList();
const selectKey = new MDCSelect(document.querySelector('.mdc-select-keys'));
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
 * Fills the key dropdown with <li> elements
 */
function fillDropdownList() {
    let ul = document.getElementById("dropdownKeys");
    let keys = keyify();

    for (const key of keys) {
        createLiElement(ul, key);
    }
}

/**
 * Creates a <li> element in the key dropdown
 * @param {*} ul <ul> element which is the key dropdown
 * @param {*} key Path to a key, e.g.: book.author.firstname
 */
function createLiElement(ul, key) {
    let li;
    let spanRipple;
    let spanText;

    li = document.createElement("li");
    li.className = "mdc-list-item";
    li.setAttribute("aria-selected", "false");
    li.setAttribute("data-value", key);
    li.setAttribute("role", "option");

    spanRipple = document.createElement("span");
    spanRipple.className = "mdc-list-item__ripple";
    li.appendChild(spanRipple);

    spanText = document.createElement("span");
    spanText.className = "mdc-list-item__text";
    spanText.textContent = key;
    li.appendChild(spanText);

    ul.appendChild(li);
}

/**
 * Deletes a <li> element in the key dropdown
 * @param {*} key Path to a key, e.g.: book.author.firstname
 */
function deleteLiElement(key) {
    selectKey.selectedIndex = -1;
    const li = document.querySelector(`[data-value='${key}']`)
    li.remove();
    selectKey.layoutOptions();
}

/**
 * Deletes a key from JSON and the key dropdown
 */
function btnDeleteKey() {
    let selectedKey = selectKey.value;

    deleteKey(selectedKey);
    deleteLiElement(selectedKey);
    pasteJSON();
}

/**
 * Gets executed when a new key gets selected in the dropdown
 */
selectKey.listen('MDCSelect:change', () => {
    console.log(`Selected option at index ${selectKey.selectedIndex} with value "${selectKey.value}"`);
});