declare namespace _default {
    export { checkDiscordId };
    export { checkRover };
    export { checkBloxlink };
    export { checkHyra };
    export { checkForCode };
    export { checkAllServices };
    export { generateRandomWords };
    export { generateRandomEmojis };
    export namespace defaultConfig {
        const words: string[];
        const emojis: string[];
        const wordSeperator: string;
        const wordAmount: number;
        const emojiAmount: number;
        const emojiSeperator: string;
    }
}
export default _default;
/**
 *
 * @param {number|string} id Discord ID to check.
 * @returns {Promise} Promise that reflects an object that contains the Roblox data, or false if nothing is found.
 */
declare function checkDiscordId(id: number | string): Promise<any>;
/**
 *
 * @param {number|string} id Discord ID to search upon.
 * @returns {Promise} Promise that reflects an object with the user's data, or false if none is found.
 */
declare function checkRover(id: number | string): Promise<any>;
/**
 *
 * @param {number|string} id Discord ID to search upon.
 * @returns {Promise} Promise that reflects an object with the user's data, or false if none is found.
 */
declare function checkBloxlink(id: number | string): Promise<any>;
/**
 *
 * @param {number|string} id Discord ID to search upon.
 * @returns {Promise} Promise that reflects an object with the user's data, or false if none is found.
 */
declare function checkHyra(id: number | string): Promise<any>;
/**
 * @param {number | string} id Roblox ID to check for code.
 * @param {string} code Code to check for in blurb.
 * @param {string} proxy Proxy to connect to for data, defaults to Roblox.
 * @returns {Promise} Promise that reflects true if code is found, false if not.
 */
declare function checkForCode(id: number | string, code: string, proxy?: string): Promise<any>;
/**
 *
 * @param {number|string} id Discord ID to check.
 * @returns {Promise} Promise that reflects an object that contains all the Roblox data, or false if nothing is found.
 */
declare function checkAllServices(id: number | string): Promise<any>;
/**
 *
 * @param {number} num Number of words. defaults to 6.
 * @param {array} words Array of words, defaults to am array of animal names.
 * @param {string} seperator Seperator, defaults to " and "
 * @returns {string} Returns the generated words.
 */
declare function generateRandomWords(num?: number, seperator?: string, words?: any[]): string;
/**
 *
 * @param {Object} args Object with arguments inside.
 * @param {number} num Number of emojis. defaults to 10.
 * @param {array} emojis Array of emojis, defaults to am array of all emojis.
 * @returns {string} Returns the generated emojis.
 */
declare function generateRandomEmojis(num?: number, seperator?: string, emojis?: any[]): string;
