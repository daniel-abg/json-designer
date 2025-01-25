const ServiceModule = () => {
    /**
     * Creates an HTML element
     * @param {*} name The name of the HTML tag
     * @param {*} classes All classes*: ["class1", "class2"]
     * @param {*} attributes All attributes*: {"attr1": "value1", "attr2": "value"}
     * @param {*} text The inner text*
     * @info *optional  (pass 'undefined')
     * @returns An HTML element
     */
    function createHtmlElement(name, classes = [], attributes = {}, text) {
        if(!name) {
            return undefined;
        }

        const element = document.createElement(name);

        if (classes.length) {
            element.classList.add(...classes);
        }
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
        if (text) {
            element.innerText = text;
        }

        return element;
    }

    return { createHtmlElement }
}
export const MyService = Object.seal(ServiceModule());