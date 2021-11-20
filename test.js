import fetch from "node-fetch";
import config from "./config.js";

/**
 *
 * @param {number|string} id Discord ID to check.
 * @returns {object|boolean} Object that contains the Roblox data, or false if nothing is found.
 */

function checkDiscordId(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const bloxlink = checkBloxlink(id);
    const rover = checkRover(id);

    if (bloxlink === false && rover === false) {
      return false;
    } else if (bloxlink.status === "ok") {
      return bloxlink;
    } else if (bloxlink === false && rover.status === "ok") {
      return rover;
    }
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * @param {number|string} id Discord ID to search upon.
 * @returns {object|boolean} Returns an object with the user's data, or false if none is found.
 */

async function checkRover(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const response = await fetch(`https://verify.eryn.io/api/user/${id}`);
    const body = await response.json();

    if (body.statusCode === "error") {
      return false;
    } else {
      return {
        status: "ok",
        discordId: id,
        robloxId: body.robloxId,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * @param {number|string} id Discord ID to search upon.
 * @returns {object|boolean} Returns an object with the user's data, or false if none is found.
 */

async function checkBloxlink(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const response = await fetch(`https://api.blox.link/v1/user/${id}`);
    const body = await response.json();

    if (body.statusCode === "error") {
      return false;
    } else {
      return {
        status: "ok",
        discordId: id,
        robloxId: body.primaryAccount,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * @param {number | string} id Roblox ID to check for code.
 * @param {string} code Code to check for in blurb.
 * @returns {boolean} Returns true if code is found, false if not.
 */

function checkForCode(id, code) {
  if (!id) {
    throw new Error("No ID Provided.");
  } else if (!code) {
    throw new Error("No Code Provided.");
  }

  fetch(`https://roblox.com/users/${id}/profile`)
    .then((res) => {
      let $ = cheerio.load(res.body);
      const blurb = $("meta[name=description]").attr("content");

      if (blurb.indexOf(code) != -1) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}

/**
 *
 * @param {number} num Number of words. defaults to 6.
 * @param {array} words Array of words, defaults to am array of animal names.
 * @param {boolean} seperate Whether or not to seperate the words by "and".
 * @returns {string} Returns the generated words.
 */

function generateRandomWords(num = 6, words = config.words, seperate = true) {
  let selected = [];
  for (i = 0; i < num; i++) {
    selected.push(words[Math.floor(Math.random() * words.length)]);
  }

  if (seperate === true) {
    return selected.join(" and ");
  } else {
    return selected.join(" ");
  }
}

/**
 *
 * @param {number} num Number of emojis. defaults to 10.
 * @param {array} emojis Array of emojis, defaults to am array of all emojis.
 * @returns {string} Returns the generated emojis.
 */

function generateRandomEmojis(num = 10, emojis = config.emojis) {
  let selected = [];
  for (i = 0; i < num; i++) {
    selected.push(emojis[Math.floor(Math.random() * emojis.length)]);
  }

  return selected.join("");
}

export default {
  checkDiscordId,
  checkRover,
  checkBloxlink,
  checkForCode,
  generateRandomWords,
  generateRandomEmojis,
};
