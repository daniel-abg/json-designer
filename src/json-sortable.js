import { html } from 'lit';
import { ContextConsumer } from '@lit/context';
import { jsonContext, updateJson } from './context.js';
import TWElement from './tw-element.js';
import Sortable from 'sortablejs';

class JsonSortable extends TWElement {
    _jsonContextConsumer = new ContextConsumer(this, {
        context: jsonContext,
        subscribe: true,
    });

    init() {
        this.generateHTML(this._jsonContextConsumer.value, this.nestedSortable);
        this.initSortable();
    }

    generateHTML(object, parentElement, path = '') {
        Object.entries(object).forEach(([key, value]) => {
            const element = this.insertItem(parentElement, key, path + key);

            if (!value) return; // because of: typeof null === 'object'

            if (typeof value === 'object') {
                this.generateHTML(value, element, path + key + '.');
            }
        });
    }

    insertItem(parent, text, path) {
        // A wrapper with padding is required to allow moving an item
        // between two groups: https://jsfiddle.net/4qdmgduo/1/
        const wrapper = document.createElement('div');
        wrapper.classList.add('pt-2', 'border-0');

        const item = document.createElement('div');
        item.classList.add(
            'item',
            '[&:has(.item)]:border',
            'cursor-default',
            'py-2.5',
            'px-3.5',
            'border-l',
            'rounded-md',
            'border-gray-500',
            'hover:border-gray-800',
            'dark:hover:border-white',
        );
        item.innerText = text;

        const iconDelete = document.createElement('i');
        iconDelete.classList.add('fa-solid', 'fa-trash', 'text-violet-800', 'dark:text-white');

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add(
            'buttonDelete',
            'cursor-pointer',
            'py-2',
            'px-3',
            'rounded-md',
            'hover:bg-violet-200',
            'active:bg-violet-300',
            'dark:hover:bg-violet-700',
            'dark:active:bg-violet-500',
        );
        buttonDelete.style.float = 'right'; // No better solution with flexbox was found yet
        buttonDelete.addEventListener('click', () => {
            const jsonNew = this.deleteKey(path);
            updateJson(this, jsonNew);
            this.refreshSortable(jsonNew);
        });

        buttonDelete.appendChild(iconDelete);
        wrapper.append(buttonDelete, item);
        parent.appendChild(wrapper);

        return item;
    }

    initSortable() {
        const nestedSortables = this.shadowRoot.querySelectorAll('.item');
        nestedSortables.forEach((sortable) => {
            new Sortable(sortable, {
                group: 'nested',
                animation: 150,
                filter: '.buttonDelete',
                fallbackOnBody: true,
                swapThreshold: 1,
                onEnd: () => {
                    const jsonNew = this.getJSObject();
                    updateJson(this, jsonNew);
                    this.refreshSortable(jsonNew);
                },
            });
        });
    }

    refreshSortable(json) {
        this.nestedSortable.innerHTML = '';
        this.generateHTML(json, this.nestedSortable);
        this.initSortable();
    }

    getJSObject() {
        const structure = this.getNewStructure(this.nestedSortable);
        const json = structure.reduce((json, key) => this.addKey(json, key), {});
        return json;
    }

    getNewStructure(sortable, paths = [], path = '') {
        const children = Array.from(sortable.children);
        children.forEach((c) => {
            const child = c.querySelector('.item');
            let innerTextUntilNewline;

            if (child.innerText.includes('\n')) {
                innerTextUntilNewline = child.innerText.substring(0, child.innerText.indexOf('\n'));
            } else {
                innerTextUntilNewline = child.innerText;
            }

            paths.push(path + innerTextUntilNewline);
            this.getNewStructure(child, paths, path + innerTextUntilNewline + '.');
        });
        return paths;
    }

    addKey(json, path) {
        const keys = path.split('.');
        let object = json;

        keys.forEach((key) => {
            const value = object[key];

            if (!value) return; // because of: typeof null === 'object'

            if (value instanceof Array) {
                object = value[0];
            } else if (typeof value === 'object') {
                object = value;
            }
        });

        object[keys.at(-1)] = {};
        return json;
    }

    deleteKey(path) {
        const keys = path.split('.');
        const object = keys.slice(0, -1).reduce((obj, key) => obj?.[key], this._jsonContextConsumer.value);
        object && delete object[keys[keys.length - 1]];
        return this._jsonContextConsumer.value;
    }

    getAllKeyPaths = (object = this._jsonContextConsumer.value, paths = [], path = '') => {
        Object.keys(object).forEach((key) => {
            paths.push(path + key);

            if (object[key] instanceof Array && object[key] !== null) {
                this.getAllKeyPaths(object[key][0], paths, path + key + '.');
            } else if (typeof object[key] === 'object' && object[key] !== null) {
                this.getAllKeyPaths(object[key], paths, path + key + '.');
            }
        });
        return paths;
    };

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
