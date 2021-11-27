import fetch from "node-fetch";
import config from "../config.js";

/**
 *
 * @param {number|string} id Discord ID to check.
 * @returns {Promise} Promise that reflects an object that contains the Roblox data, or false if nothing is found.
 */

async function checkDiscordId(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const bloxlink = await checkBloxlink(id);
    const rover = await checkRover(id);
    const hyra = await checkHyra(id);

    if (isFalsy(bloxlink) && isFalsy(rover) && isFalsy(hyra)) {
      return false;
    } else if (bloxlink.status === "ok") {
      return bloxlink;
    } else if (isFalsy(bloxlink)) {
      return rover;
    } else {
      return hyra;
    }
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * @param {number|string} id Discord ID to check.
 * @returns {Promise} Promise that reflects an object that contains all the Roblox data, or false if nothing is found.
 */

async function checkAllServices(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const bloxlink = await checkBloxlink(id);
    const rover = await checkRover(id);
    const hyra = await checkHyra(id);

    return isFalsy(bloxlink) && isFalsy(rover) && isFalsy(hyra)
      ? false
      : {
          bloxlink,
          rover,
          hyra,
        };
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * @param {number|string} id Discord ID to search upon.
 * @returns {Promise} Promise that reflects an object with the user's data, or false if none is found.
 */

async function checkRover(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const response = await fetch(`https://verify.eryn.io/api/user/${id}`);
    const body = await response.json();

    const robloxId = `${body.robloxId}`;

    return body.status === "error"
      ? false
      : {
          status: "ok",
          discordId: id,
          robloxId,
        };
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * @param {number|string} id Discord ID to search upon.
 * @returns {Promise} Promise that reflects an object with the user's data, or false if none is found.
 */

async function checkBloxlink(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const response = await fetch(`https://api.blox.link/v1/user/${id}`);
    const body = await response.json();

    return body.status === "error"
      ? false
      : {
          status: "ok",
          discordId: id,
          robloxId: body.primaryAccount,
        };
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * @param {number|string} id Discord ID to search upon.
 * @returns {Promise} Promise that reflects an object with the user's data, or false if none is found.
 */

async function checkHyra(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const response = await fetch(`https://api.hyra.io/verify/user/${id}`);
    const body = await response.json();

    return body.type === "error"
      ? false
      : {
          status: "ok",
          discordId: id,
          robloxId: body.account,
        };
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * @param {number | string} id Roblox ID to check for code.
 * @param {string} code Code to check for in blurb.
 * @param {string} proxy Proxy to connect to for data, defaults to Roblox.
 * @returns {Promise} Promise that reflects true if code is found, false if not.
 */

async function checkForCode(id, code, proxy = config.usersEndpoint) {
  if (!code) {
    throw new Error("No Code Provided.");
  } else if (!id) {
    throw new Error("No ID Provided.");
  }

  try {
    const response = await fetch(`${proxy}${id}`);
    const body = await response.json();
    return body.description.includes(code) ? true : false;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * @param {number} num Number of words. defaults to 6.
 * @param {array} words Array of words, defaults to am array of animal names.
 * @param {string} seperator Seperator, defaults to " and "
 * @returns {string} Returns the generated words.
 */

function generateRandomWords(
  num = config.wordAmount,
  seperator = config.wordSeperator,
  words = config.words
) {
  let selected = [];
  for (let i = 0; i < num; i++) {
    selected.push(words[Math.floor(Math.random() * words.length)]);
  }

  return selected.join(seperator);
}

/**
 *
 * @param {Object} args Object with arguments inside.
 * @param {number} num Number of emojis. defaults to 10.
 * @param {array} emojis Array of emojis, defaults to am array of all emojis.
 * @returns {string} Returns the generated emojis.
 */

function generateRandomEmojis(
  num = config.emojiAmount,
  seperator = config.emojiSeperator,
  emojis = config.emojis
) {
  let selected = [];
  for (let i = 0; i < num; i++) {
    selected.push(emojis[Math.floor(Math.random() * emojis.length)]);
  }

  return selected.join(seperator);
}

function isFalsy(value) {
  return value === false ||
    value === 0 ||
    value === 0n ||
    value === "" ||
    value === "" ||
    value === `` ||
    value === null ||
    value === undefined ||
    isNaN(foo)
    ? true
    : false;
}

export default {
  checkDiscordId,
  checkRover,
  checkBloxlink,
  checkHyra,
  checkForCode,
  checkAllServices,
  generateRandomWords,
  generateRandomEmojis,
  defaultConfig: {
    words: config.words,
    emojis: config.emojis,
    wordSeperator: config.wordSeperator,
    wordAmount: config.wordAmount,
    emojiAmount: config.emojiAmount,
    emojiSeperator: config.emojiSeperator,
    usersEndpoint: config.usersEndpoint,
  },
};
