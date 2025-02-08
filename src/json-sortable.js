import { LitElement, html, css } from "lit";
import { createHtmlElement } from './service.js';
import Sortable from 'sortablejs';
import { TWStyles } from "./style.css.js";
import { FAStyles } from "./fontawesome.css.js";

class JsonSortable extends LitElement {
    static styles = [TWStyles, FAStyles, css`
        #nested-sortable {
            border: 1px solid #999;
            border-radius: 4px;
            cursor: default;
        }
        .item {
            padding: 10px 15px;
            border-left: 1px solid #999;
            border-radius: 4px;
        }
        .item:has(.item) {
            border: 1px solid #999;
        }
        .item:hover {
            border-color: #333;
        }
        // TODO: Ensure responsiveness
        // @media (max-width: 750px) {
        //     .item {
        //         padding: 5px 7px;
        //     }
        // }
    `];
    static properties = {
        json: { type: Object },
    }

    init() {
        const sortable = this.shadowRoot.getElementById('nested-sortable');              
        this.generateHTML(this.json, sortable);
        this.initSortable();
    }

    generateHTML(object, parentElement, path = '') {       
        Object.keys(object).forEach(key => {
            let element = this.insertItem(parentElement, key, path + key);

            if (typeof object[key] === 'object' && object[key] !== null) {
                this.generateHTML(object[key], element, path + key + '.')
            }
        });
    }

    insertItem(parent, text, path) {
        // wrapper with padding to prevent problems with nested sortable https://jsfiddle.net/4qdmgduo/1/
        const wrapper = createHtmlElement("div", ["pt-2"]);       
        const item = createHtmlElement("div", ["item"], {path: path}, text);        
        const buttonDelete = createHtmlElement("button",
            ["buttonDelete", "py-2", "px-3", "rounded-md", "hover:bg-violet-200", "active:bg-violet-300"],
            { style: "float: right;" }
        );
        const iconDelete = createHtmlElement("i", ["fa-solid", "fa-trash", "text-violet-800"]);
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

        for (let i = 0; i < nestedSortables.length; i++) {
            const sortable = new Sortable(nestedSortables[i], {
                group: 'nested',
                animation: 150,
                filter: ".buttonDelete",
                fallbackOnBody: true,
                swapThreshold: 1,
                onEnd: () => {
                    this.updateJson(this.getJSObject());
                }
            });
        }
    }

    refreshSortable(json) {
        const sortable = this.shadowRoot.getElementById("nested-sortable");           
        sortable.innerHTML = "";    
        this.generateHTML(json, sortable);
        this.initSortable();
    }

    getJSObject() {
        const sortable = this.shadowRoot.getElementById('nested-sortable');
        const structure = this.getNewStructure(sortable);
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
            this.getNewStructure(child, paths, path + innerTextUntilNewline + '.');
        }
        return paths;
    }

    addKey(json, path) {
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

    deleteKey(path) {
        const keys = path.split(".");
        let object = this.json;        

        for (let i = 0; i < keys.length - 1; i++) {
            if (object[keys[i]] instanceof Array && object[keys[i]] !== null) {
                object = object[keys[i]][0];
            } else if (typeof object[keys[i]] === 'object' && object[keys[i]] !== null) {
                object = object[keys[i]];
            }
        }
        
        delete object[keys[keys.length - 1]];
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
        this.init();
    }

    render() {
        return html`
            <div 
                id="nested-sortable"
                class="w-full item mb-6"
            ></div>
        `;
    }
}
customElements.define('json-sortable', JsonSortable);