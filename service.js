const ServiceModule = () => {
    /**
     * Creates an HTML element
     * @param {*} name The name of the tags
     * @param {*} classes All classes*: ["class1", "class2"]
     * @param {*} id The id*
     * @param {*} attributes All attributes*: {"attr1": "value1", "attr2": "value"}
     * @param {*} text The inner text*
     * @info *optional  (pass 'undefined')
     * @returns An HTML element
     */
    function createHtmlElement(name, classes, id, attributes, text) {
        if (name.trim() == "" || name === null || name === undefined) {
            return undefined;
        }

        let element = document.createElement(name);

        if (classes != undefined && classes != null) {
            for (const className of classes) {
                element.classList.add(className);
            }
        }

        if (id != undefined && id != null && id != "") {
            element.id = id;
        }

        if (attributes != undefined && attributes != null) {
            Object.entries(attributes).flatMap(([key, value]) => {
                element.setAttribute(key, value);
            });
        }

        if (text != undefined && text != null) {
            element.innerText = text;
        }

        return element;
    }

    return { createHtmlElement }
}
export const MyService = Object.seal(ServiceModule());