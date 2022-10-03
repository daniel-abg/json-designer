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
     * @param {*} obj JavaScript object
     * @param {*} prefix 
     * @returns All key paths from nested objects.
     * @source https://stackoverflow.com/questions/47062922/how-to-get-all-keys-with-values-from-nested-objects
     */
    getAllKeyPaths = (obj = this.#json, prefix = '') =>
        Object.keys(obj).reduce((res, el) => {
            if (typeof obj[el] === 'object' && obj[el] !== null) {
                return [...res, ...this.getAllKeyPaths(obj[el], prefix + el + '.')];
            }
            return [...res, prefix + el];
        }, []);

    /**
     * Deletes a key in the JavaScript object
     * @param {*} path Path of the key, e.g.: book.author.firstname
     */
    deleteKey(path) {
        let keys = path.split(".");
        let jsonObj = this.#json;

        for (let i = 0; i < keys.length - 1; i++) {
            jsonObj = jsonObj[keys[i]];
        }

        delete jsonObj[keys[keys.length - 1]];
    }
}
export default MyJSON = Object.seal(new MyJSON());