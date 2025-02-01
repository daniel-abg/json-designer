import { LitElement, html } from "lit";
import './tab-controller.js';
import './json-textfield.js';
import './json-sortable.js';
import { TWStyles } from './style.css.js';
import { FAStyles } from "./fontawesome.css.js";

class AppController extends LitElement {
    static styles = [TWStyles, FAStyles];

    static properties = {
      space: { type: Number },
      json: { type: Object },
    }

    constructor() {        
        super();
        this.space = 2;
        this.json = {
          "book": {
              "title": "The Great Gatsby",
              "author": {
                  "firstname": "Francis Scott",
                  "lastname": "Fitzgerald",
                  /*"family": [
                      {
                          "person": "Zelda Sayre",
                          "type": "wife",
                          "anotherArray": [
                              {
                                  "anotherKey": "anotherValue1"
                              }, {
                                  "anotherKey": "anotherValue2"
                              }
                          ]
                      },
                      {
                          "person": "Frances Scott",
                          "type": "daughter",
                          "anotherArray": []
                      }
                  ],*/
                  "born": 1896,
                  "died": 1940
              },
              "published": 1925
          }
      };
    }

    getJson(space) {
        return JSON.stringify(this.json, null, space);
    }

    setJson(json) {
        this.json = structuredClone(json);
        this.jsonTextField.json = this.json;
        
    }

    copyJsonToClipboard() {
        navigator.clipboard.writeText(this.getJson(this.space));
    }

    firstUpdated() {
        this.jsonTextField = this.shadowRoot.querySelector('json-textfield');
    }

    render() {
        return html`
            <header class="text-xl font-medium text-white bg-violet-800 p-5 pl-10">
                JSON Designer
            </header>
            
            <main class="max-w-5xl m-auto px-6 pb-6">
                <tab-controller>
                    <span slot="tab1">
                        <i class="fa-solid fa-code mr-2"></i>
                        JSON
                    </span>
                    <span slot="tab2">
                        <i class="fa-solid fa-palette mr-1"></i>
                        Designer
                    </span>

                    <span slot="tab1content">
                        <json-textfield
                            .json=${this.json}                            
                        ></json-textfield>
                    </span>
                    <span slot="tab2content">
                        <json-sortable
                          .json=${this.json}
                          @json-changed=${e => this.setJson(e.detail)}
                        ></json-sortable>
                    </span>
                </tab-controller>

                <button 
                  id="copyJSON" 
                  class="text-white bg-violet-800 hover:bg-violet-700 active:bg-violet-500 py-2 px-3 rounded-md"
                  @click=${this.copyJsonToClipboard}
                >
                    <i class="fa-regular fa-copy mr-2"></i>
                    Copy JSON
                </button>
            </main>
        `;
    }
}

customElements.define('app-controller', AppController);