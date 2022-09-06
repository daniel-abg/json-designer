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