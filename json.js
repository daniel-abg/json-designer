/**
 * This is the central JavaScript object that gets changed by the app.
 */
let json = {
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
 * @param {*} space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @returns The JSON string.
 */
export function getJson(space) {
    return JSON.stringify(json, null, space);
}

/**
 * @param {*} obj JavaScript object
 * @param {*} prefix 
 * @returns All keys from nested objects.
 * @source https://stackoverflow.com/questions/47062922/how-to-get-all-keys-with-values-from-nested-objects
 */
export const keyify = (obj = json, prefix = '') =>
    Object.keys(obj).reduce((res, el) => {
        if (typeof obj[el] === 'object' && obj[el] !== null) {
            return [...res, ...keyify(obj[el], prefix + el + '.')];
        }
        return [...res, prefix + el];
    }, []);

/**
 * Deletes a key in the JavaScript object
 * @param {*} path Path of the key, e.g.: book.author.firstname
 */
export function deleteKey(path) {
    let keys = path.split(".");
    let jsonObj = json;

    for (let i = 0; i < keys.length - 1; i++) {
        jsonObj = jsonObj[keys[i]];
    }

    delete jsonObj[keys[keys.length - 1]];
}