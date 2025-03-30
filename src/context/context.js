import { createContext } from '@lit/context';

const jsonContext = createContext(Symbol('json-context'));

const updateJson = (component, json) => {
    updateContext(component, { json, hasError: false, errorMessage: '' });
};

const reportError = (component, errorMessage) => {
    updateContext(component, { hasError: true, errorMessage });
};

const updateContext = (component, value) => {
    const event = new CustomEvent('json-changed', {
        bubbles: true,
        composed: true,
        detail: value,
    });
    component.dispatchEvent(event);
};

export { jsonContext, updateJson, reportError };
