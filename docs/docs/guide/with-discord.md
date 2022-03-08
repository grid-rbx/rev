---
sidebar_position: 5
---

# With Discord

Rev has the ability to check a Discord ID to see whether or not it's connect to a Roblox account via Bloxlink or RoVer. This is possible through the following functions:

- `checkDiscordId()`
- `checkAllServices()`

The difference between the two is that `checkDiscordId()` returns the first service Rev is able to find an account connected to. Rev currently prioritizes Bloxlink because they have more connected accounts, which should yield you better results.

`checkAllServices()` returns an object that contains both Bloxlink and RoVer nested inside an object, no matter what results were recieved:

```json title="checkAllServices() schema"
{
  "bloxlink": {},
  "rover": {}
}
```

In most cases, you most likely will want to use `checkDiscordId()` rather than `checkAllServices()`.

## Check Discord ID

To use the `checkDiscordId()` function, all you need is the Discord ID of the account you would like to check:

```javascript title="index.js"
await checkDiscordId(150662786257518592); // Wumpus#0001
```

This should return something a little along the lines of:

```json
{
  "status": "ok",
  "discordId": "150662786257518592",
  "robloxId": "9685774"
}
```

If there was no account connected, then the function will just return `false`.

## Check all services

The `checkAllServices()` function usage is very similar to that of `checkDiscordId()`, except that the result is different. The result that should come out of the function should be the same as `checkDiscordId()`, except that the results are nested inside of an object (as seen above):

```javascript title="index.js"
await checkAllServices(150662786257518592); // Wumpus#0001
```

If one out of the two returns false, it will still just insert it into the returned object. You can see that in this example:

```json title="checkAllServices() schema"
{
  "bloxlink": {
    "status": "ok",
    "discordId": "150662786257518592",
    "robloxId": "9685774"
  },
  "rover": false
}
```

## Checking specific providers

If you want to specifically check one or the other provider, than you can use the functions `checkBloxlink()` and `checkRover()`. Their usage is the exact same as `checkDiscordId()`, except it only checks one specific provider. Here are a few examples:

```javascript title="index.js"
// Bloxlink
await checkBloxlink(150662786257518592);

// RoVer
await checkRover(150662786257518592);
```

It returns the same schema as `checkDiscordId()`
