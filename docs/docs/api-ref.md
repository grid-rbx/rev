# API Reference

<dl>
<dt><a href="#checkRover">checkRover(id)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#checkBloxlink">checkBloxlink(id)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#checkHyra">checkHyra(id)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#checkDiscordId">checkDiscordId(id)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#checkAllServices">checkAllServices(id)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#checkForCode">checkForCode(id, code, proxy)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#generateRandomWords">generateRandomWords(num, seperator, words)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#generateRandomEmojis">generateRandomEmojis(num, seperator, emojis)</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

<a name="checkRover"></a>

## checkRover(id) ⇒ <code>Promise</code>

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects an object with the user's data, or false if none is found.

| Param | Type                                       | Description                |
| ----- | ------------------------------------------ | -------------------------- |
| id    | <code>number</code> \| <code>string</code> | Discord ID to search upon. |

<a name="checkBloxlink"></a>

## checkBloxlink(id) ⇒ <code>Promise</code>

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects an object with the user's data, or false if none is found.

| Param | Type                                       | Description                |
| ----- | ------------------------------------------ | -------------------------- |
| id    | <code>number</code> \| <code>string</code> | Discord ID to search upon. |

<a name="checkHyra"></a>

## checkHyra(id) ⇒ <code>Promise</code>

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects an object with the user's data, or false if none is found.

| Param | Type                                       | Description                |
| ----- | ------------------------------------------ | -------------------------- |
| id    | <code>number</code> \| <code>string</code> | Discord ID to search upon. |

<a name="checkDiscordId"></a>

## checkDiscordId(id) ⇒ <code>Promise</code>

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects an object that contains the Roblox data, or false if nothing is found.

| Param | Type                                       | Description          |
| ----- | ------------------------------------------ | -------------------- |
| id    | <code>number</code> \| <code>string</code> | Discord ID to check. |

<a name="checkAllServices"></a>

## checkAllServices(id) ⇒ <code>Promise</code>

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects an object that contains all the Roblox data, or false if nothing is found.

| Param | Type                                       | Description          |
| ----- | ------------------------------------------ | -------------------- |
| id    | <code>number</code> \| <code>string</code> | Discord ID to check. |

<a name="checkForCode"></a>

## checkForCode(id, code, proxy) ⇒ <code>Promise</code>

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects true if code is found, false if not.

| Param | Type                                       | Description                                       |
| ----- | ------------------------------------------ | ------------------------------------------------- |
| id    | <code>number</code> \| <code>string</code> | Roblox ID to check for code.                      |
| code  | <code>string</code>                        | Code to check for in blurb.                       |
| proxy | <code>string</code>                        | Proxy to connect to for data, defaults to Roblox. |

<a name="generateRandomWords"></a>

## generateRandomWords(num, seperator, words) ⇒ <code>string</code>

**Kind**: global function
**Returns**: <code>string</code> - Returns the generated words.

| Param     | Type                | Description                                           |
| --------- | ------------------- | ----------------------------------------------------- |
| num       | <code>number</code> | Number of words. defaults to 6.                       |
| seperator | <code>string</code> | Seperator, defaults to " and "                        |
| words     | <code>array</code>  | Array of words, defaults to am array of animal names. |

<a name="generateRandomEmojis"></a>

## generateRandomEmojis(num, seperator, emojis) ⇒ <code>string</code>

**Kind**: global function
**Returns**: <code>string</code> - Returns the generated emojis.

| Param     | Type                | Description                                          |
| --------- | ------------------- | ---------------------------------------------------- |
| num       | <code>number</code> | Number of emojis. defaults to 10.                    |
| seperator | <code>Object</code> | Seperator, defaults to ""                            |
| emojis    | <code>array</code>  | Array of emojis, defaults to am array of all emojis. |
