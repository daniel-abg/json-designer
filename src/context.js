import { createContext } from '@lit/context';

const jsonContext = createContext(Symbol('json-context'));

const updateJson = (component, jsonNew) => {
    const event = new CustomEvent('json-changed', { 
        bubbles: true,
        composed: true, 
        detail: jsonNew 
    });
    component.dispatchEvent(event);   
}

export { jsonContext, updateJson };