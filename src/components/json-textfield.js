import { html } from 'lit';
import { ContextConsumer } from '@lit/context';
import { jsonContext, updateJson, reportError } from '../context/context.js';
import TWElement from './tw-element.js';

class JsonTextField extends TWElement {
    _jsonContextConsumer = new ContextConsumer(this, {
        context: jsonContext,
        subscribe: true,
    });

    static properties = {
        previousJsonValue: { type: String },
    };

    insertJson(jsonString) {
        try {
            const json = JSON.parse(jsonString);
            updateJson(this, json);
        } catch (error) {
            reportError(this, error.message);
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
                .value=${JSON.stringify(this._jsonContextConsumer.value.json, null, 2)}
                @change=${(e) => this.insertJson(e.target.value)}
            ></textarea>
        `;
    }
}

customElements.define('json-textfield', JsonTextField);
