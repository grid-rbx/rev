const fetch = require("node-fetch");

const config = require("./config");

function checkDiscordId(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  const bloxlink = fromBloxlink(id);
  const rover = fromRover(id);

  if (bloxlink.status === "error" && rover.status === "error") {
    return false;
  } else if (bloxlink.status === "ok") {
    return bloxlink;
  } else if (bloxlink.status === "error" && rover.status === "ok") {
    return rover;
  }

  return id;
}

async function fromRover(id) {
  try {
    const response = await fetch(`https://verify.eryn.io/api/user/${id}`);
    const body = await response.json();

    if (body.statusCode === "error") {
      return config.userNotFound;
    }
    return {
      status: "ok",
      statusCode: 200,
      discordId: id,
      robloxId: body.robloxId,
    };
  } catch (error) {
    return {
      status: "http-error",
      error,
    };
  }
}

async function fromBloxlink(id) {
  try {
    const response = await fetch(`https://api.blox.link/v1/user/${id}`);
    const body = await response.json();

    if (body.status === "error") {
      return config.userNotFound;
    }

    return {
      status: "ok",
      statusCode: 200,
      discordId: id,
      robloxId: body.primaryAccount,
    };
  } catch (error) {
    return {
      status: "http-error",
      error,
    };
  }
}

function checkForCode(id, code) {
  if (!id) {
    throw new Error("No ID Provided.");
  } else if (!code) {
    throw new Error("No Code Provided.");
  }

  fetch(`https://roblox.com/users/${id}/profile`)
    .then((res) => {
      $ = cheerio.load(res.body);
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
 * @param {number} num - Number of words. defaults to 6.
 * @param {array} words - Array of words, defaults to am array of animal names.
 * @returns Generated Words, separated by "and".
 */

function generateRandomWords(num = 6, words = config.words) {
  let selected = [];
  for (i = 0; i < num; i++) {
    selected.push(words[Math.floor(Math.random() * words.length)]);
  }

  return selected.join(" and ");
}

/**
 *
 * @param {number} num - Number of emojis. defaults to 10.
 * @returns Generated emojis.
 */

function generateRandomEmojis(num = 10) {
  let selected = [];
  for (i = 0; i < num; i++) {
    selected.push(
      config.emojis[Math.floor(Math.random() * config.emojis.length)]
    );
  }

  return selected.join("");
}

console.log(generateRandomEmojis());

module.exports = {
  checkDiscordId,
  fromRover,
  fromBloxlink,
  checkForCode,
  generateRandomWords,
  generateRandomEmojis,
};
