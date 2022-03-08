"use strict";

import phin from "phin";
import config from "../config.js";

const p = phin.defaults({
  parse: "json",
});

/**
 * Function to search for a Roblox account cia a Discord ID from Rover
 * @param {number|string} id Discord ID to search upon.
 * @returns {Promise} Promise that reflects an object with the user's data, or false if none is found.
 */

async function checkRover(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const { body } = await p(`https://verify.eryn.io/api/user/${id}`);

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
 * Function to search for a Roblox account cia a Discord ID from Bloxlink
 * @param {number|string} id Discord ID to search upon.
 * @returns {Promise} Promise that reflects an object with the user's data, or false if none is found.
 */

async function checkBloxlink(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const { body } = await p(`https://api.blox.link/v1/user/${id}`);

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
 * Function to check all services, and return a single point of truth Roblox ID
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

    if (bloxlink === false && rover === false) {
      return false;
    } else if (bloxlink.status === "ok") {
      return bloxlink;
    } else if (bloxlink === false) {
      return rover;
    }
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Function to check all services, and return the data fron all of them
 * @param {number|string} id Discord ID to check.
 * @returns {Promise} Promise that reflects an object that contains all the services' data, or false if nothing is found.
 */

async function checkAllServices(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  try {
    const bloxlink = await checkBloxlink(id);
    const rover = await checkRover(id);

    return bloxlink === false && rover === false
      ? false
      : {
          bloxlink,
          rover,
        };
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Function to check if a string is on a Roblox user's profile
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
    const { body } = await p(`${proxy}${id}`);

    return body.description.toLowerCase().includes(code.toLowerCase())
      ? true
      : false;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Function to generate a random set of words
 * @param {number} num Number of words. defaults to 6.
 * @param {string} seperator Seperator, defaults to " and "
 * @param {array} words Array of words, defaults to am array of animal names.
 * @returns {string} Returns the generated words.
 */

function generateRandomWords(
  num = config.wordAmount,
  seperator = config.wordSeperator,
  words = config.words
) {
  const selected = [];
  for (let i = 0; i < num; i++) {
    selected.push(words[Math.floor(Math.random() * words.length)]);
  }

  return selected.join(seperator);
}

/**
 * Function to generate a random set of words
 * @param {number} num Number of emojis. defaults to 10.
 * @param {Object} seperator Seperator, defaults to ""
 * @param {array} emojis Array of emojis, defaults to am array of all emojis.
 * @returns {string} Returns the generated emojis.
 */

function generateRandomEmojis(
  num = config.emojiAmount,
  seperator = config.emojiSeperator,
  emojis = config.emojis
) {
  const selected = [];
  for (let i = 0; i < num; i++) {
    selected.push(emojis[Math.floor(Math.random() * emojis.length)]);
  }

  return selected.join(seperator);
}

export default {
  checkDiscordId,
  checkRover,
  checkBloxlink,
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
