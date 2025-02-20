import { html } from "lit";
import { createHtmlElement } from './service.js';
import Sortable from 'sortablejs';
import TWElement from "./tw-element.js";

class JsonSortable extends TWElement {  
    static properties = {
        json: { type: Object },
    }

    init() {
        this.generateHTML(this.json, this.nestedSortable);
        this.initSortable();
    }

    generateHTML(object, parentElement, path = '') {
        Object.entries(object).forEach(([key, value]) => {
            let element = this.insertItem(parentElement, key, path + key);

            if (typeof value === 'object' && object[key] !== null) {
                this.generateHTML(value, element, path + key + '.');
            }
        });
    }

    insertItem(parent, text, path) {
        // wrapper with padding to prevent problems with nested sortable https://jsfiddle.net/4qdmgduo/1/
        const wrapper = createHtmlElement("div", ["pt-2", "border-0"]);       
        const item = createHtmlElement("div", ["item", "[&:has(.item)]:border", "cursor-default", "py-2.5", "px-3.5", "border-l", "rounded-md", "border-gray-500", "hover:border-gray-800", "dark:hover:border-white"], {path: path}, text);        
        const buttonDelete = createHtmlElement("button",
            ["buttonDelete", "cursor-pointer", "py-2", "px-3", "rounded-md", "hover:bg-violet-200", "active:bg-violet-300", "dark:hover:bg-violet-700", "dark:active:bg-violet-500"],
            { style: "float: right;" }
        );
        const iconDelete = createHtmlElement("i", ["fa-solid", "fa-trash", "text-violet-800", "dark:text-white"]);
        buttonDelete.appendChild(iconDelete);
        buttonDelete.addEventListener("click", () => {
            const jsonNew = this.deleteKey(path);           
            this.updateJson(jsonNew);
            this.refreshSortable(jsonNew);
        });
    
        wrapper.appendChild(buttonDelete);
        wrapper.appendChild(item);
        parent.appendChild(wrapper);
        
        return item;
    }

    initSortable() {
        const nestedSortables = this.shadowRoot.querySelectorAll('.item')
        nestedSortables.forEach(sortable => {
            new Sortable(sortable, {
                group: 'nested',
                animation: 150,
                filter: ".buttonDelete",
                fallbackOnBody: true,
                swapThreshold: 1,
                onEnd: () => {
                    const jsonNew = this.getJSObject();                   
                    this.updateJson(jsonNew);
                    this.refreshSortable(jsonNew);
                }
            });
        });
    }

    refreshSortable(json) {
        this.nestedSortable.innerHTML = "";    
        this.generateHTML(json, this.nestedSortable);
        this.initSortable();
    }

    getJSObject() {
        const structure = this.getNewStructure(this.nestedSortable);
        const json = {};

        for(let i = 0; i < structure.length; i++) {
            this.addKey(json, structure[i]);
        }
        return json;
    }

    updateJson(jsonNew) {
        const event = new CustomEvent('json-changed', { detail: jsonNew });
        this.dispatchEvent(event);
    }

    getNewStructure(sortable, paths = [], path = '') {
        const children = Array.from(sortable.children);
        children.forEach(c => {
            const child = c.querySelector('.item');
            let innerTextUntilNewline;

            if (child.innerText.includes("\n")) {
                innerTextUntilNewline = child.innerText.substring(0, child.innerText.indexOf("\n"))
            } else {
                innerTextUntilNewline = child.innerText;
            }

            paths.push(path + innerTextUntilNewline);
            this.getNewStructure(child, paths, path + innerTextUntilNewline + '.');
        });
        return paths;
    }

    addKey(json, path) {
        const keys = path.split(".");
        let object = json;
        
        keys.forEach(key => {
            if (object[key] instanceof Array && object[key] !== null) {
                object = object[key][0];
            } else if (typeof object[key] === 'object' && object[key] !== null) {
                object = object[key];
            }
        });

        object[keys.at(-1)] = {};
    }

    deleteKey(path) {
        const keys = path.split(".");
        const object = keys.slice(0, -1).reduce((obj, key) => obj?.[key], this.json);
        object && delete object[keys[keys.length - 1]];
        return this.json;
    }

    getAllKeyPaths = (object = json, paths = [], path = "") => {
        Object.keys(object).forEach(key => {
            paths.push(path + key);

            if (object[key] instanceof Array && object[key] !== null) {
                this.getAllKeyPaths(object[key][0], paths, path + key + ".");
            } else if (typeof object[key] === 'object' && object[key] !== null) {
                this.getAllKeyPaths(object[key], paths, path + key + ".");
            }
        });
        return paths;
    }

    firstUpdated() {
        super.firstUpdated();
        this.nestedSortable = this.shadowRoot.getElementById('nested-sortable');
        this.init();
    }

    render() {
        return html`
            <div
                id="nested-sortable"
                class="w-full item mb-6 pt-0.5 pb-2.5 px-3.5 rounded-md border border-gray-500 dark:bg-gray-700"
            ></div>
        `;
    }
}
customElements.define('json-sortable', JsonSortable);