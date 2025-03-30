import { createContext } from '@lit/context';

const jsonContext = createContext(Symbol('json-context'));

const updateJson = (component, json) => {
    const event = new CustomEvent('json-changed', {
        bubbles: true,
        composed: true,
        detail: { json, hasError: false, errorMessage: '' },
    });
    component.dispatchEvent(event);
};

const reportError = (component, errorMessage) => {
    const event = new CustomEvent('json-changed', {
        bubbles: true,
        composed: true,
        detail: { hasError: true, errorMessage },
    });
    component.dispatchEvent(event);
};

export { jsonContext, updateJson, reportError };
