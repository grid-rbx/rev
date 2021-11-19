const fetch = require("node-fetch");

const config = require("./config")

function checkDiscordId(id) {
  if (!id) {
    throw new Error("No Discord ID Provided");
  }

  id = id.toString();

  const bloxlink = fromBloxlink(id);
  const rover = fromRover(id);

  if (bloxlink.status === "error" && rover.status === "error") {
    return false
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

checkDiscordId("848287488281")

 const rev = {
  checkDiscordId,
  fromRover,
  fromBloxlink,
  checkForCode,
};

module.exports = rev;
