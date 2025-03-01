import { createContext } from '@lit/context';

const jsonDesignerContext = createContext(Symbol('json-designer-context'));

const updateJson = (component, jsonNew) => {
    const event = new CustomEvent('json-changed', { 
        bubbles: true,
        composed: true, 
        detail: jsonNew 
    });
    component.dispatchEvent(event);   
}

export { jsonDesignerContext, updateJson };