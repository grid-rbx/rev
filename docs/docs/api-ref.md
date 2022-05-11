# API Reference

<dl>
<dt><a href="#checkRover">checkRover(id)</a> ⇒ <code>Promise</code></dt>
<dd><p>Function to search for a Roblox account via a Discord ID from Rover</p>
</dd>
<dt><a href="#checkBloxlink">checkBloxlink(id)</a> ⇒ <code>Promise</code></dt>
<dd><p>Function to search for a Roblox account via a Discord ID from Bloxlink</p>
</dd>
<dt><a href="#checkDiscordId">checkDiscordId(id)</a> ⇒ <code>Promise</code></dt>
<dd><p>Function to check all services, and return a single point of truth Roblox ID</p>
</dd>
<dt><a href="#checkAllServices">checkAllServices(id)</a> ⇒ <code>Promise</code></dt>
<dd><p>Function to check all services, and return the data from all of them</p>
</dd>
<dt><a href="#checkForCode">checkForCode(id, code, proxy)</a> ⇒ <code>Promise</code></dt>
<dd><p>Function to check if a string is on a Roblox user&#39;s profile</p>
</dd>
<dt><a href="#generateRandomWords">generateRandomWords(num, seperator, words)</a> ⇒ <code>string</code></dt>
<dd><p>Function to generate a random set of words</p>
</dd>
<dt><a href="#generateRandomEmojis">generateRandomEmojis(num, seperator, emojis)</a> ⇒ <code>string</code></dt>
<dd><p>Function to generate a random set of emojis</p>
</dd>
</dl>

<a name="checkRover"></a>

## checkRover(id) ⇒ <code>Promise</code>

Function to search for a Roblox account via a Discord ID from Rover

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects an object with the user's data, or false if none is found.

| Param | Type                                       | Description                |
| ----- | ------------------------------------------ | -------------------------- |
| id    | <code>number</code> \| <code>string</code> | Discord ID to search upon. |

<a name="checkBloxlink"></a>

## checkBloxlink(id) ⇒ <code>Promise</code>

Function to search for a Roblox account via a Discord ID from Bloxlink

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects an object with the user's data, or false if none is found.

| Param | Type                                       | Description                |
| ----- | ------------------------------------------ | -------------------------- |
| id    | <code>number</code> \| <code>string</code> | Discord ID to search upon. |

<a name="checkDiscordId"></a>

## checkDiscordId(id) ⇒ <code>Promise</code>

Function to check all services, and return a single point of truth Roblox ID

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects an object that contains the Roblox data, or false if nothing is found.

| Param | Type                                       | Description          |
| ----- | ------------------------------------------ | -------------------- |
| id    | <code>number</code> \| <code>string</code> | Discord ID to check. |

<a name="checkAllServices"></a>

## checkAllServices(id) ⇒ <code>Promise</code>

Function to check all services, and return the data from all of them

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects an object that contains all the services' data, or false if nothing is found.

| Param | Type                                       | Description          |
| ----- | ------------------------------------------ | -------------------- |
| id    | <code>number</code> \| <code>string</code> | Discord ID to check. |

<a name="checkForCode"></a>

## checkForCode(id, code, proxy) ⇒ <code>Promise</code>

Function to check if a string is on a Roblox user's profile

**Kind**: global function
**Returns**: <code>Promise</code> - Promise that reflects true if code is found, false if not.

| Param | Type                                       | Description                                       |
| ----- | ------------------------------------------ | ------------------------------------------------- |
| id    | <code>number</code> \| <code>string</code> | Roblox ID to check for code.                      |
| code  | <code>string</code>                        | Code to check for in blurb.                       |
| proxy | <code>string</code>                        | Proxy to connect to for data, defaults to Roblox. |

<a name="generateRandomWords"></a>

## generateRandomWords(num, seperator, words) ⇒ <code>string</code>

Function to generate a random set of words

**Kind**: global function
**Returns**: <code>string</code> - Returns the generated words.

| Param     | Type                | Description                                           |
| --------- | ------------------- | ----------------------------------------------------- |
| num       | <code>number</code> | Number of words. defaults to 6.                       |
| seperator | <code>string</code> | Seperator, defaults to " and "                        |
| words     | <code>array</code>  | Array of words, defaults to am array of animal names. |

<a name="generateRandomEmojis"></a>

## generateRandomEmojis(num, seperator, emojis) ⇒ <code>string</code>

Function to generate a random set of emojis

**Kind**: global function
**Returns**: <code>string</code> - Returns the generated emojis.

| Param     | Type                | Description                                          |
| --------- | ------------------- | ---------------------------------------------------- |
| num       | <code>number</code> | Number of emojis. defaults to 10.                    |
| seperator | <code>Object</code> | Seperator, defaults to ""                            |
| emojis    | <code>array</code>  | Array of emojis, defaults to am array of all emojis. |
