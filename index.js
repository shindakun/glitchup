const fetch = require('node-fetch');

// Four minute timeout, container timesout at five minutes.
const glitchup = (path) => setTimeout(() => fetch(`https://${process.env.PROJECT_NAME}.glitch.me${path||"/"}`)
  .then((res) =>
    res.text()
  ).then(() =>
    glitchup(path)
  ), 240000);

module.exports = glitchup;
