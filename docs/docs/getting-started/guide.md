---
sidebar_position: 3
---

# Guide

This is a guide running you through the basics of Rev. Let's get started!

Once you have Rev imported, you're ready to start using the library! In this example, we'll be using Node.js, but you can use whatever runtime you'd like. To start let's make sure it's working by generating some random words, and then `console.log` them:

```javascript title="index.js"
const words = rev.generateRandomWords();

console.log(words);
```

Now, if you run the code and look in your console you should see something like this:

```bash title="Console"
donkey and eel and sandpiper and mosquito and ferret and quail
```

Pretty cool, right? The words generated come from a list of animal names that we take six from, by default. Now let's say we wanted to have only three words generated? Thats's pretty simple, just pass in `3` as the argument:

```javascript title="index.js"
const words = rev.generateRandomWords(3);

console.log(words);
```

If you go and look in the console now you should now see that it only prints out three different words:

```bash title="Console"
wombat and eagle and seahorse
```

Great! Now, you may want to have an array of your own words that you'd like to use, and for this, we will use the next argument.

```javascript title="index.js"
const nature = ["tree", "flower", "shrub", "flytrap", "grass", "bush"];
const words = rev.generateRandomWords(3, nature);
```

If you run your file, you will now see an output of:

```bash title="Console"

```
