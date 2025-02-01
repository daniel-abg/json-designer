import { LitElement, html, css } from "lit";
import { TWStyles } from "./style.css.js";

class JsonTextField extends LitElement {
    static styles = TWStyles;

    static properties = {
        json: { type: Object },
    }

    render() {       
        return html`
            <textarea id="json-textarea"
                class="w-full h-96 p-4 resize-none border rounded-md border-gray-500 hover:border-gray-800 focus:outline-none mb-6"
                .value=${JSON.stringify(this.json, null, 2)}
            ></textarea>
        `;
    }
}

customElements.define('json-textfield', JsonTextField);