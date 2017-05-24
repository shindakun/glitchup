# glitchup

> Keeping your Glitch site up all night long. Please use responsibly.

[![NPM Version][npm-image]][npm-url]

## Install

```bash
npm i -S glitchup
```

## Usage

glitchup in it's current form only needs for you to `require` and call it from within your project. By default it will use the current Glitch project name and use node-fetch will GET `/` project every four minutes.

```javascript
const glitchup = require('glitchup');
glitchup();
```

## License

[ISC](https://choosealicense.com/licenses/isc/)

[npm-image]: https://img.shields.io/npm/v/glitchup.svg
[npm-url]: https://npmjs.org/package/glitchup
