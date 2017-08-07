# glitchup

> Keeping your Glitch site up all night long. Please use responsibly.

[![NPM Version][npm-image]][npm-url]

## Install

On Glitch simply add glitchup through "Add package" to `package.json` in the editor.

[![glitch up][glitchup-gif]]

or if you are command lining.

```bash
npm i -S glitchup
```

## Usage

glitchup in it's current form only needs for you to `require` and call it from within your project. By default it will use the current Glitch project name and use node-fetch to GET `/` every four minutes.

```javascript
const glitchup = require('glitchup');
glitchup();
```

You can add a path to the url that glitchup will GET by passing it into the function. 
```javascript
const glitchup = require('glitchup');
glitchup('/cron/');
```

## Please note.

Glitch is currently a free service offered by Fog Creek Software. `glitchup` is not supported by, nor is it associated with, Fog Creek Software. Not every container running on Glitch needs to stay awake at all times. Please use this responsibly - those Fog Creek-er's are alright!

## License

[ISC](https://choosealicense.com/licenses/isc/)

[npm-image]: https://img.shields.io/npm/v/glitchup.svg
[npm-url]: https://npmjs.org/package/glitchup
[glitchup-gif]:  https://raw.githubusercontent.com/shindakun/glitchup/master/glitchup.gif
