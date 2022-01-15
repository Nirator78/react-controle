/**
 * Conversion d'une string en json traitable
 * @param {*} string 
 * @returns 
 */
export const toJson = (string) => {
    return JSON.parse(string);
}