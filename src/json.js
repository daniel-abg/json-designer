/**
 * This is the central JavaScript object that gets changed by the app.
 */
const MyJSONmodule = () => {
    let json = {
        "book": {
            "title": "The Great Gatsby",
            "author": {
                "firstname": "Francis Scott",
                "lastname": "Fitzgerald",
                /*"family": [
                    {
                        "person": "Zelda Sayre",
                        "type": "wife",
                        "anotherArray": [
                            {
                                "anotherKey": "anotherValue1"
                            }, {
                                "anotherKey": "anotherValue2"
                            }
                        ]
                    },
                    {
                        "person": "Frances Scott",
                        "type": "daughter",
                        "anotherArray": []
                    }
                ],*/
                "born": 1896,
                "died": 1940
            },
            "published": 1925
        }
    }

    /**
     * @param {*} space Adds indentation (white space) to the JSON string to make it easier to read.
     * @returns The JSON string.
     */
    function getJson(space) {
        return JSON.stringify(json, null, space);
    }

    function setJson(object) {
        json = object;
    }

    /**
     * Returns the paths of all keys from a JavaScript object
     * @param {*} object JavaScript object that can be nested and contain arrays
     * @param {*} paths All already collected paths
     * @param {*} path The current location to search for keys
     * @returns The paths of all keys from a JavaScript object
     */
    const getAllKeyPaths = (object = json, paths = [], path = "") => {
        Object.keys(object).forEach(key => {
            paths.push(path + key);

            if (object[key] instanceof Array && object[key] !== null) {
                getAllKeyPaths(object[key][0], paths, path + key + ".");
            } else if (typeof object[key] === 'object' && object[key] !== null) {
                getAllKeyPaths(object[key], paths, path + key + ".");
            }
        });
        return paths;
    }

    /**
     * Deletes a key in the JavaScript object
     * @param {*} path Path of the key, e.g.: book.author.firstname
     */
    function deleteKey(path) {
        let keys = path.split(".");
        let object = json;

        for (let i = 0; i < keys.length - 1; i++) {
            if (object[keys[i]] instanceof Array && object[keys[i]] !== null) {
                object = object[keys[i]][0];
            } else if (typeof object[keys[i]] === 'object' && object[keys[i]] !== null) {
                object = object[keys[i]];
            }
        }

        delete object[keys[keys.length - 1]];
    }

    return { getJson, setJson, getAllKeyPaths, deleteKey };
}
export const MyJSON = Object.seal(MyJSONmodule());