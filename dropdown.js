import { MyJSON } from "./json.js";

const DropdownModule = () => {
    const MDCSelect = mdc.select.MDCSelect;
    fill();
    const selectKey = new MDCSelect(document.querySelector('.mdc-select-keys'));

    /**
     * @returns The selected key in the dropdown
     */
    function getSelected() {
        return selectKey.value;
    }

    /**
     * Fills the key dropdown with <li> elements
     */
    function fill() {
        let ul = document.getElementById("dropdownKeys");
        let keys = MyJSON.getAllKeyPaths();

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
        /* <li class="mdc-list-item" aria-selected="false" data-value="book.author.firstname" role="option">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">book.author.firstname</span>
            </li> */

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
     * @param {*} path Path to a key, e.g.: book.author.firstname
     */
    function deleteLiElement(path) {
        selectKey.selectedIndex = -1;
        const li = document.querySelector(`[data-value='${path}']`)
        li.remove();
        selectKey.layoutOptions();
    }

    return { getSelected, deleteLiElement }
}
export const KeyDropdown = Object.seal(DropdownModule());