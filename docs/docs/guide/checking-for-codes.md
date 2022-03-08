---
sidebar_position: 4
---

# Checking for Codes

## Basic Usage

Now, we are ready to check for codes on Roblox user's profiles. To start, grab a sentance, word or your entire description from your Roblox account, and place it in a variable. Grid is powerful because it can check if a description contains a message, rather than the entire message being checked.

```javascript title="index.js"
const myDescription = "Sample Description";
```

Then you can use the method `checkForCode` to check if the code is somewhere on your profile.

```javascript title="index.js"
const myDescription = "Sample Description";
const myUserId = 333179113;

console.log(await rev.checkForCode(myUserId, myDescription));
```

The User ID comes first, then the code. If possible, use async/await as it allows the code to be executed asynchronously rather than synchronously. If you run this piece of code, you should now see an output exactly like this:

```bash title="Console"
true
```

Now if you change the variable `myDescription` to something that is not on your profile, it should now return false.

```bash title="Console"
false
```

## Proxies

A feature that is supported on the function, is that you can pass in a proxy as the third argument. The reason as to why you might want to use a proxy differs, but most of the time it is due to CORS issues or self-hosting for logging purposes.

There are many proxies out there, but here is a list of the top few:

- [ProxyService](https://github.com/sentanos/ProxyService) (self-hosted)
- [rprxy](https://github.com/sentanos/rprxy) (self-hosted)
- [RoProxy](https://roproxy.com)

You can use whichever you please, but for this example we will be using RoProxy, because of us not having to host it ourselves.

When using proxies, you have to remember the format that Rev takes the URL as:

```javascript
await rev.checkForCode(333179113, "Hi!", "https://myproxy.com/users/v1/users/"); // Remember the slash at the end
```

Rev would interpret that as:

```javascript
`https://myproxy.com/users/v1/users/${id}`;
```

Basically, just remember use the URL you would normally use for getting a user's data, but don't put in the ID.
