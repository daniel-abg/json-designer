import { MyJSON } from './json.js';
import { MyService } from './service.js';

import Sortable from '../node_modules/sortablejs/modular/sortable.esm.js';

const SortableModule = () => {
    /**
     * Initializes the sortable
     */
    function init() {
        let sortable = document.getElementById("nested-sortable");
        let json = JSON.parse(MyJSON.getJson());

        generateHTML(json, sortable);
        initSortable();
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
     * @param {*} parent HTML element in which next one gets inserted
     * @param {*} text Inner text of the HTML element
     * @returns The just created and inserted HTML element
     */
    function insertItem(parent, text, path) {
        // wrapper with padding to prevent problems with nested sortable https://jsfiddle.net/4qdmgduo/1/
        const wrapper = MyService.createHtmlElement("div", ["pt-2"]);
        const item = MyService.createHtmlElement("div", ["item"], {path: path}, text);        
        
        const buttonDelete = MyService.createHtmlElement("button",
            ["buttonDelete", "py-2", "px-3", "rounded-md", "hover:bg-violet-200", "active:bg-violet-300"],
            { style: "float: right;" }
        );
        const iconDelete = MyService.createHtmlElement("i", ["fa-solid", "fa-trash", "text-violet-800"]);
        buttonDelete.appendChild(iconDelete);
        buttonDelete.addEventListener("click", () => deleteKey(path));
    
        wrapper.appendChild(buttonDelete);
        wrapper.appendChild(item);
        parent.appendChild(wrapper);
        
        return item;
    }

    /**
     * Documentation: https://github.com/SortableJS/Sortable#options
     */
    function initSortable() {
        let nestedSortables = document.querySelectorAll('.item')

        for (var i = 0; i < nestedSortables.length; i++) {
            new Sortable(nestedSortables[i], {
                group: 'nested',
                animation: 150,
                filter: ".buttonDelete",
                fallbackOnBody: true,
                swapThreshold: 1,
                onEnd: () => {
                    MyJSON.setJson(getJSObject());
                }
            });
        }
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

    function getJSObject() {
        let structure = getNewStructure(document.getElementById('nested-sortable'));
        let json = {};

        for(let i = 0; i < structure.length; i++) {
            addKey(json, structure[i]);
        }

        return json;
    }

    function addKey(json, path) {
        let keys = path.split(".");
        let object = json;
        
        for (let i = 0; i < keys.length - 1; i++) {
            if (object[keys[i]] instanceof Array && object[keys[i]] !== null) {
                object = object[keys[i]][0];
            } else if (typeof object[keys[i]] === 'object' && object[keys[i]] !== null) {
                object = object[keys[i]];
            }
        }

        object[keys.at(-1)] = {};
    }

    function deleteKey(selectedKey) {
        MyJSON.deleteKey(selectedKey);
        KeySortable.refresh();
    }

    /**
     * Rebuilds the whole nested sortable
     */
    function refresh() {
        let sortable = document.getElementById("nested-sortable");
        let json = JSON.parse(MyJSON.getJson());

        sortable.innerHTML = "";

        generateHTML(json, sortable);
        initSortable();
    }

    return { refresh }
}
export const KeySortable = Object.seal(SortableModule());