---
sidebar_position: 1
---

# Installation

Installing Rev is as simple as installing it with npm or Yarn

```bash npm2yarn
npm install @grid-rbx/rev
```

Then just initiate it in your code and you're ready to go!

## Browser Compatibility

To ensure that the module works in the browser, we recommend that you check out CDN tools like [Skypack](https://skypack.dev) and command-line tools like [Browserify](https://browserify.org). Currently, we do not pack the module up at all which is mostly the cause, as we want the module to be lightweight and easy-to-use for everyone.

:::caution
Another thing to keep in mind is that in the browser, you cannot make requests to Roblox's servers directly due to CORS, thus there is optional `proxy` arguments on some of the methods. You can see it in action at our [demo](https://github.com/grid-rbx/rev/tree/master/demo), where we use [RoProxy](https://roproxy.com) to access the Roblox Users API.
:::
