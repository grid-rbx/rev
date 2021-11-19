const fetch = require("node-fetch");

const config = {
  userNotFound: {
    status: "error",
    errorCode: 404,
    error: "User not found.",
  },
  noDiscordId: {
    status: "error",
    errorCode: 400,
    error: "No Discord ID provided.",
  },
};

function checkDiscordId(id) {
  if (!id) {
    return console.log(config.noDiscordId);
  }

  id = id.toString();

  const bloxlink = fromBloxlink(id);
  const rover = fromRover(id);

  if (bloxlink.status === "http-error" || rover.status === "http-error") {
    return console.log(bloxlink.error);
  }

  if (bloxlink.status === "error" && rover.status === "error") {
    return console.log({
      bloxlink,
      rover,
    });
  } else if (bloxlink.status === "error") {
    return console.log(bloxlink);
  } else if (rover.status === "error") {
    return console.log(rover);
  } else if (bloxlink.status === "ok" && rover.status === "ok") {
    return bloxlink;
  } else if (bloxlink.status === "ok" && rover.status === "error") {
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
  return fetch(`https://roblox.com/users/${id}/profile`).then((r) => {
    $ = cheerio.load(r.body);
    const blurb = $("meta[name=description]").attr("content");

    if (blurb.indexOf(code) != -1) {
      console.log("Found code");
    } else {
      console.log("Code not found");
    }
  });
}

const rev = {
  checkDiscordId,
  fromRover,
  fromBloxlink,
  checkForCode,
};

module.exports = rev;
