import { html } from "lit";
import TWElement from "./tw-element.js";

class JsonTextField extends TWElement {
    static properties = {
        json: { type: Object },
    }

    render() {       
        return html`
            <textarea
                class="
                    block w-full h-96 p-4 mb-6 resize-none border rounded-md
                    border-gray-500 hover:border-gray-800 focus:outline-hidden 
                    dark:bg-gray-700 dark:text-white dark:hover:border-white
                "
                .value=${JSON.stringify(this.json, null, 2)}
            ></textarea>
        `;
    }
}

customElements.define('json-textfield', JsonTextField);