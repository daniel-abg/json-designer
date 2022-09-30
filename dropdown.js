import { keyify } from "./json.js";

const MDCSelect = mdc.select.MDCSelect;

// The dropdown needs to be filled before the MDCSelect gets instantiated
fillDropdownList();
const selectKey = new MDCSelect(document.querySelector('.mdc-select-keys'));

/**
 * @returns The selected key in the dropdown
 */
export function getSelected() {
    return selectKey.value;
}

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
 * Gets executed when a new key gets selected in the dropdown
 */
 selectKey.listen('MDCSelect:change', () => {
    console.log(`Selected option at index ${selectKey.selectedIndex} with value "${selectKey.value}"`);
});

/**
 * Deletes a <li> element in the key dropdown
 * @param {*} key Path to a key, e.g.: book.author.firstname
 */
 export function deleteLiElement(key) {
    selectKey.selectedIndex = -1;
    const li = document.querySelector(`[data-value='${key}']`)
    li.remove();
    selectKey.layoutOptions();
}