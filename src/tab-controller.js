import { html } from 'lit';
import TWElement from './tw-element.js';

class TabController extends TWElement {
    static properties = {
        activeTab: { type: String }
    };

    constructor() {
        super();
        this.activeTab = 'tab1';
    }

    render() {
        return html`
            <div id="tab-bar" class="flex mb-6">            
                <div
                    class="
                        tab cursor-pointer grow text-center p-3 text-violet-800
                        hover:bg-violet-200 active:bg-violet-300
                        dark:text-white dark:hover:bg-violet-700 dark:active:bg-violet-500
                        ${this.activeTab === 'tab1' ? 'border-b-2 border-violet-800 dark:border-white' : ''}
                    "
                    @click="${() => this.setActiveTab('tab1')}"
                >
                    <slot name="tab1"></slot>
                </div>
                <div
                    class="
                        tab cursor-pointer grow text-center p-3 text-violet-800
                        hover:bg-violet-200 active:bg-violet-300
                        dark:text-white dark:hover:bg-violet-700 dark:active:bg-violet-500
                        ${this.activeTab === 'tab2' ? 'border-b-2 border-violet-800 dark:border-white' : ''}
                    "
                    @click="${() => this.setActiveTab('tab2')}"
                >
                    <slot name="tab2"></slot>
                </div>
            </div>
            
            <slot name="tab1content" class="tabcontent ${this.activeTab === 'tab1' ? '' : 'hidden'}"></slot>
            <slot name="tab2content" class="tabcontent ${this.activeTab === 'tab2' ? '' : 'hidden'}"></slot>
        `;
    }

    setActiveTab(tab) {
        this.activeTab = tab;
    }
}

customElements.define('tab-controller', TabController);
