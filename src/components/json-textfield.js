import { html } from 'lit';
import { ContextConsumer } from '@lit/context';
import { jsonContext, updateJson } from '../context/context.js';
import TWElement from './tw-element.js';

class JsonTextField extends TWElement {
    _jsonContextConsumer = new ContextConsumer(this, {
        context: jsonContext,
        subscribe: true,
    });

    insertJson(jsonString) {
        try {
            const jsonParsed = JSON.parse(jsonString);
            updateJson(this, jsonParsed);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return html`
            <textarea
                aria-label="JSON Textarea"
                class="
                    block w-full h-96 p-4 mb-6 resize-none border rounded-md
                    border-gray-500 hover:border-gray-800 focus:outline-hidden 
                    dark:bg-gray-700 dark:text-white dark:hover:border-white
                "
                .value=${JSON.stringify(this._jsonContextConsumer.value, null, 2)}
                @change=${(e) => this.insertJson(e.target.value)}
            ></textarea>
        `;
    }
}

customElements.define('json-textfield', JsonTextField);
