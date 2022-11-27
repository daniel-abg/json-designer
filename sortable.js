import { MyJSON } from './json.js';
import { MyService } from './service.js';

const SortableModule = () => {
    /**
     * Initializes the sortable
     */
    function init() {
        let sortable = document.getElementById("nested-sortable");
        let json = JSON.parse(MyJSON.getJson());

        generateHTML(json, sortable);
        loadJS();
    }
    init();

    /**
     * Represents a Javascript object in form of a nested sortable
     * @param {*} object JavaScript object which gets represented
     * @param {*} parentElement HTML element of the sortable
     */
    function generateHTML(object, parentElement, path = '') {
        Object.keys(object).forEach(key => {
            let element = insertItem(parentElement, key, path + key);

            if (typeof object[key] === 'object' && object[key] !== null) {
                generateHTML(object[key], element, path + key + '.')
            }
        });
    }

    /**
     * Creates HTML elements and inserts them into the nested sortable
     * @param {*} parentElement HTML element in which next one gets inserted
     * @param {*} text Inner text of the HTML element
     * @returns The just created and inserted HTML element
     */
    function insertItem(parentElement, text, path) {
        let divWrapper = MyService.createHtmlElement("div", ["pt-5"]); // wrapper with padding to prevent problems with nested sortable https://jsfiddle.net/4qdmgduo/1/
        let divItem = MyService.createHtmlElement("div", ["item"], undefined, {path: path}, text);
        let iconDelete = `<i data-path="${path}" style="float: right;" class="material-icons iconDelete" aria-hidden="true">delete</i>`;
        let buttonDelete = `<button data-path="${path}" style="float: right;" id="buttonDeleteKey" class="ml-5 mdc-button buttonDelete">
                                <span class="mdc-button__ripple"></span>
                                <i class="material-icons" aria-hidden="true">delete</i>
                            </button>`
        
        divWrapper.appendChild(divItem);
        divWrapper.insertAdjacentHTML("afterbegin", buttonDelete);
        //divWrapper.insertAdjacentHTML("afterbegin", iconDelete);
        parentElement.appendChild(divWrapper);
        
        return divItem;
    }

    /**
     * Initializes the JavaScript functionality of the nested sortable
     * Documentation: https://github.com/SortableJS/Sortable#options
     */
    function loadJS() {
        let nestedSortables = document.querySelectorAll('.item')

        for (var i = 0; i < nestedSortables.length; i++) {
            new Sortable(nestedSortables[i], {
                group: 'nested',
                animation: 150,
                filter: ".buttonDelete",
                fallbackOnBody: true,
                swapThreshold: 1,
                onEnd: doOnDrop
            });
        }
    }

    /**
     * Applies order and hierarchy changes of the sortable to the JavaScript object
     * @param {*} evt 
     */
    function doOnDrop(evt) {
        // TODO: Apply order and hierarchy changes to the object
        console.log(evt.item);
        console.log(evt.from);
        console.log(evt.oldIndex);
        console.log(evt.to);
        console.log(evt.newIndex);
        console.log(getNewStructure(document.getElementById('nested-sortable')));
    }

    function getNewStructure(sortable, paths = [], path = '') {
        let children = Array.from(sortable.children);
        for (const c of children) {
            let child = c.querySelector('.item');
            let innerTextUntilNewline;

            if (child.innerText.includes("\n")) {
                innerTextUntilNewline = child.innerText.substring(0, child.innerText.indexOf("\n"))
            } else {
                innerTextUntilNewline = child.innerText;
            }

            paths.push(path + innerTextUntilNewline);
            getNewStructure(child, paths, path + innerTextUntilNewline + '.');
        }
        return paths;
    }

    /**
     * Rebuilds the whole nested sortable
     */
    function refresh() {
        let sortable = document.getElementById("nested-sortable");
        let json = JSON.parse(MyJSON.getJson());

        sortable.innerHTML = "";

        generateHTML(json, sortable);
        loadJS();
    }

    return { refresh }
}
export const KeySortable = Object.seal(SortableModule());