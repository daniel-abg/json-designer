/**
 * This is the central JavaScript object that gets changed by the app.
 */
class MyJSON {
    #json = {
        "book": {
            "name": "The Great Gatsby",
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
    getJson(space) {
        return JSON.stringify(this.#json, null, space);
    }

    /**
     * Returns the paths of all keys from a JavaScript object
     * @source: https://infinitbility.com/how-to-get-all-keys-from-nested-json-object-in-javascript/
     * @param {*} object JavaScript object that can be nested and contain arrays
     * @param {*} paths All already collected paths
     * @param {*} path The current location to search for keys
     * @returns The paths of all keys from a JavaScript object 
     */
    getAllKeyPaths = (object = this.#json, paths = [], path = "") => {
        Object.keys(object).forEach(key => {
            paths.push(path + key);

            if (object[key] instanceof Array && object[key] !== null) {
                this.getAllKeyPaths(object[key][0], paths, path + key + ".");
            } else if (typeof object[key] === 'object' && object[key] !== null) {
                this.getAllKeyPaths(object[key], paths, path + key + ".");
            }
        });
        return paths;
    }

    /**
     * Deletes a key in the JavaScript object
     * @param {*} path Path of the key, e.g.: book.author.firstname
     */
    deleteKey(path) {
        let keys = path.split(".");
        let object = this.#json;

        for (let i = 0; i < keys.length - 1; i++) {
            if (object[keys[i]] instanceof Array && object[keys[i]] !== null) {
                object = object[keys[i]][0];
            } else if (typeof object[keys[i]] === 'object' && object[keys[i]] !== null) {
                object = object[keys[i]];
            }
        }

        delete object[keys[keys.length - 1]];
    }
}
export default MyJSON = Object.seal(new MyJSON());