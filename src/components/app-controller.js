import { html } from 'lit';
import TWElement from './tw-element.js';
import { ContextProvider } from '@lit/context';
import { jsonContext } from '../context/context.js';
import { json } from '../data/json-data.js';
import './tab-controller.js';
import './json-textfield.js';
import './json-sortable.js';

class AppController extends TWElement {
    _jsonContextProvider = new ContextProvider(this, {
        context: jsonContext,
        initialValue: json,
    });

    static properties = {
        isDarkMode: { type: Boolean },
        space: { type: Number },
    };

    constructor() {
        super();
        this.isDarkMode = document.documentElement.classList.contains('dark');
        this.space = 2;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('json-changed', (event) => {
            this._jsonContextProvider.setValue({ ...event.detail });
        });
    }

    copyJsonToClipboard() {
        const jsonStringified = JSON.stringify(this._jsonContextProvider.value, null, this.space);
        navigator.clipboard.writeText(jsonStringified);
    }

    render() {
        return html`
            <header class="flex items-center justify-between text-xl font-medium text-white bg-violet-800 p-3 px-10">
                JSON Designer
                <div class="flex gap-1">
                    <a
                        title="JSON Designer on GitHub"
                        target="_blank"
                        href="https://github.com/daniel-abg/json-designer"
                        class="block w-11 text-white bg-violet-800 hover:bg-violet-700 active:bg-violet-500 py-2 px-3 rounded-md"
                    >
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <button
                        class="w-11 cursor-pointer text-white bg-violet-800 hover:bg-violet-700 active:bg-violet-500 py-2 px-3 rounded-md"
                        @click=${() => {
                            const isDarkMode = document.documentElement.classList.toggle('dark');
                            localStorage.theme = isDarkMode ? 'dark' : 'light';
                            this.isDarkMode = isDarkMode;
                        }}
                    >
                        ${this.isDarkMode
                            ? html`<i class="fa-solid fa-sun"></i>`
                            : html`<i class="fa-solid fa-moon"></i>`}
                    </button>
                </div>
            </header>

            <main class="max-w-5xl m-auto px-6 pb-6">
                <tab-controller>
                    <span slot="tab1"><i class="fa-solid fa-code mr-2"></i>JSON</span>
                    <span slot="tab2"><i class="fa-solid fa-palette mr-2"></i>Designer</span>

                    <span slot="tab1content">
                        <json-textfield></json-textfield>
                    </span>
                    <span slot="tab2content">
                        <json-sortable></json-sortable>
                    </span>
                </tab-controller>

                <button
                    class="cursor-pointer text-white bg-violet-800 hover:bg-violet-700 active:bg-violet-500 py-2 px-3 rounded-md"
                    @click=${this.copyJsonToClipboard}
                >
                    <i class="fa-regular fa-copy mr-2"></i>Copy JSON
                </button>
            </main>
        `;
    }
}

customElements.define('app-controller', AppController);
