---
sidebar_position: 2
---

# Quick Start

Once you have Rev installed, you're ready to start using it!

```javascript title="index.js"
// CommonJS
const rev = require("@grid-rbx/rev");

// ES6 (recommended)
import rev from "@grid-rbx/rev;

// Browser
import rev from 'https://cdn.skypack.dev/@grid-rbx/rev';
```

Rev can be imported using either, but due to it being more modern, we recommend that you use the ES6 `import` method. Of course, there is also the browser method, which we recommend you use if you are using vanilla JS.

Once you have Rev imported, you're ready to start using the library! In these examples, we'll be using Node.js, but you can use whatever runtime you'd like. This is a guide running you through the basics of Rev. We are going to get you started on generating phrases, then checking for words on profiles, then finally checking based on Discord IDs. Let's get started!
