import { MyJSON } from "./json.js";
import { MyService } from "./service.js";

const DropdownModule = () => {
    const MDCSelect = mdc.select.MDCSelect;
    generateHTML();
    const selectKey = new MDCSelect(document.querySelector('.mdc-select-keys'));

    /**
     * @returns The selected key path in the dropdown
     */
    function getSelected() {
        return selectKey.value;
    }

    /**
     * Lists all key paths of a JavaScript object in a dropdown
     */
    function generateHTML() {
        let ul = document.getElementById("dropdown");
        let keys = MyJSON.getAllKeyPaths();

        for (const key of keys) {
            insertItem(ul, key);
        }
    }

    /**
     * Creates HTML elements and inserts them into the dropdown
     * @param {*} ul HTML element of the dropdown
     * @param {*} path Path to a key, e.g.: book.author.firstname
     */
    function insertItem(ul, path) {
        let li = MyService.createHtmlElement("li", ["mdc-list-item"], undefined, { "aria-selected": "false", "data-value": path, "role": "option" });
        let spanRipple = MyService.createHtmlElement("span", ["mdc-list-item__ripple"]);
        let spanText = MyService.createHtmlElement("span", ["mdc-list-item__text"], undefined, undefined, path);

        li.appendChild(spanRipple);
        li.appendChild(spanText);
        ul.appendChild(li);
    }

    /**
     * Gets executed when a key path gets selected in the dropdown
     */
    selectKey.listen('MDCSelect:change', () => {
        console.log(`Selected option at index ${selectKey.selectedIndex} with value "${selectKey.value}"`);
    });

    /**
     * Rebuilds the whole dropdown
     */
    function refresh() {
        let dropdown = document.getElementById("dropdown");

        dropdown.innerHTML = "";
        generateHTML();
        selectKey.layoutOptions();
        selectKey.selectedIndex = -1;
    }

    return { getSelected, refresh }
}
export const KeyDropdown = Object.seal(DropdownModule());