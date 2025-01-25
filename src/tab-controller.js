import { pasteJsonToEditor } from './main.js';

class TabController extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open'});        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --tw-violet-200: #ddd6fe;
                    --tw-violet-300: #c4b5fd;
                    --tw-violet-800: #5b21b6;
                }
                #tab-bar {
                    display: flex;
                    margin-bottom: 1.5rem;
                }
                .tab {
                    display: flex;
                    justify-content: center;
                    color: var(--tw-violet-800);
                    padding: 0.75rem;
                    flex-grow: 1;
                }
                .tab:hover {
                    background-color: var(--tw-violet-200);
                    cursor: pointer;
                }
                .tab:active {
                    background-color: var(--tw-violet-300);
                }
                .tab.active {
                    border-bottom: 2px solid var(--tw-violet-800);
                }
                .hidden {
                    display: none;
                }
            </style>
            
            <div id="tab-bar">            
                <div name="tab1" class="tab active" >
                    <slot name="tab1"></slot>
                </div>
                <div name="tab2"class="tab">
                    <slot name="tab2"></slot>
                </div>
            </div>
            
            <slot id="tab1"class="tabcontent"name="tab1content"></slot>
            <slot id="tab2" class="tabcontent hidden" name="tab2content"></slot>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelectorAll('.tab').forEach(tab => {          
            tab.addEventListener('click', this.onTabClick.bind(this));
        });
    }

    onTabClick(event) {
        const tab = event.currentTarget;

        this.shadowRoot.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        if(tab.getAttribute('name') === 'tab1') {
            pasteJsonToEditor();
        }
        
        this.shadowRoot.querySelectorAll('slot.tabcontent').forEach(slot => {           
            if (slot.id === tab.getAttribute('name')) {
                console.log(tab);
                slot.classList.remove('hidden');
            } else {
                slot.classList.add('hidden');
            }
        });
    }
}

customElements.define('tab-controller', TabController);