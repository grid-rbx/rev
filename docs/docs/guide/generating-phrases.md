---
sidebar_position: 3
---

# Generating Phrases

## Generating Words

To start let's make sure it's working by generating some random words, and then `console.log` them:

```javascript title="index.js"
const words = rev.generateRandomWords();

console.log(words);
```

Now, if you run the code and look in your console you should see something like this:

```bash title="Console"
donkey and eel and sandpiper and mosquito and ferret and quail
```

If you run your code again, you'll get a completely different code.

```bash title="Console"
bear and bee and alpaca and hummingbird and stork and lion
```

Pretty cool, right? The words generated come from a list of animal names that we take six from, by default. You can change all of this, but that's next.

### Amount Of Words

Now let's say we wanted to have only three words generated? Thats's pretty simple, just pass in `3` as the first argument, which is the `num` argument.

```javascript title="index.js"
const words = rev.generateRandomWords(3);

console.log(words);
```

If you go and look in the console now you should now see that it only prints out three different words:

```bash title="Console"
wombat and eagle and seahorse
```

Voila! We have now changed the amount of words changed successfully.

:::caution
When you are using these codes to put on a Roblox profile, please use the default amount or more, to make sure that the code by coincidence isn't there already.
:::

### Seperators

You may want to have your phrases by seperated by something other than " and ", like perhaps a comma: ", " or something completely random such as " ooga booga ". This is possible using the `seperator` argument.

```javascript title="index.js"
const words = rev.generateRandomWords(3, " seperator ");

console.log(words);
```

And just like that, we're ready to run the code:

```bash title="Console"
magpie seperator goldfish seperator ape
```

If you run the code again, you'll get a different output:

```bash title="Console"
coyote seperator woodpecker seperator donkey
```

### Words Used

Now, you may want to have an array of your own words that you'd like to use, and for this, we will use the argument `words`.

```javascript title="index.js"
const nature = ["tree", "flower", "shrub", "flytrap", "grass", "bush"];
const words = rev.generateRandomWords(3, " and ", nature);

console.log(words);
```

If you run your file, you will now see an output similar to:

```bash title="Console"
shrub and grass and tree
```

Great! If you run it again, you will of course now see a different set of words from your array.

```bash title="Console"
flytrap and bush and grass
```

Congratulations! You have mastered generating word phrases.

## Generating Emojis

Next up on the chopping block, we have generating phrases from emojis. This is the exact same API as `generateRandomWords`, except that it uses emojis, so this should be a rather quick section.

To generate emojis, it's as simple as:

```javascript title="index.js"
const emojis = rev.generateRandomEmojis();

console.log(emojis);
```

And you should see an output a little something like this:

```bash title="Console"
🚋💡🙇☔💵🍧🐾😍👛🍢
```

This method supports all the same arguments as `generateRandomWords`, so feel free to use them.

And just like that, you're done! Good job!
