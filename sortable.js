import { MyJSON } from './json.js';

// https://github.com/SortableJS/Sortable

const SortableModule = () => {
    function initialize() {
        fill();
        let nestedSortables = document.querySelectorAll('.item')
        
        for (var i = 0; i < nestedSortables.length; i++) {
            new Sortable(nestedSortables[i], {
                group: 'nested',
                animation: 150,
                fallbackOnBody: true,
                swapThreshold: 1,
                onEnd: onEnd
            });
        }
    }
    initialize();

    function onEnd(evt) {
        // TODO: reflect order and hierarchy changes in the JSON string
        console.log(evt.item);
        console.log(evt.from);
        console.log(evt.oldIndex);
        console.log(evt.to);
        console.log(evt.newIndex);
        console.log(mySerial(document.getElementById('nested-sortable')));
    }

    function fill() {
        let sortable = document.getElementById("nested-sortable");

        let json = JSON.parse(MyJSON.getJson());
        fillSortable2(json, sortable);
    }

    function fillSortable2(object = json, parentEl) {
        Object.keys(object).forEach(key => {
            let el = createLiElement(parentEl, key);

            if (typeof object[key] === 'object' && object[key] !== null) {
                fillSortable2(object[key], el)
            }
        });
    }

    /**
     * Creates and inserts <div class="pt-5"><div class="item">text</div></div>
     * @param {*} parent 
     * @param {*} text 
     * @returns 
     */
    function createLiElement(parent, text) {
        let divWrapper;
        let divItem;

        // wrapper to prevent problems with nested sortable https://jsfiddle.net/4qdmgduo/1/
        divWrapper = document.createElement("div");
        divWrapper.className = "pt-5";

        divItem = document.createElement("div");
        divItem.className = "item";
        divItem.innerText = text;

        divWrapper.appendChild(divItem);
        parent.appendChild(divWrapper);

        return divItem;
    }

    function mySerial(sortable, paths = [], path = '') {
        let children = Array.from(sortable.children);
        for (const c of children) {
            let child = c.querySelector('.item');
            let innerTextUntilNewline;

            if (child.innerText.includes("\n")) {
                innerTextUntilNewline = child.innerText.substring(0, child.innerText.indexOf("\n"))
            } else {
                innerTextUntilNewline = child.innerText;
            }

            paths.push(path + innerTextUntilNewline);

            mySerial(child, paths, path + innerTextUntilNewline + '.');
        }
        return paths;
    }

    function refresh() {
        let sortable = document.getElementById('nested-sortable');
        sortable.innerHTML = '';
        initialize();
    }

    return { fill, refresh }
}
export const KeySortable = Object.seal(SortableModule());