import { LitElement } from 'lit';
import { TWStyles } from './style.css.js';
import { FAStyles } from './fontawesome.css.js';

class TWElement extends LitElement {
    static styles = [TWStyles, FAStyles];

    firstUpdated() {
        if (document.documentElement.classList.contains('dark')) {
            this.shadowRoot.firstElementChild.classList.add('dark');
        }
        new MutationObserver(() => this.updateDarkMode()).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });
    }

    updateDarkMode() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        this.shadowRoot.firstElementChild.classList.toggle('dark', isDarkMode);
    }
}

export default TWElement;
