const fetch = require('node-fetch');

// Four minute timeout, container timesout at five minutes.
const glitchup = () => setTimeout(() => fetch(`https://${process.env.PROJECT_NAME}.glitch.me`)
  .then((res) =>
    res.text()
  ).then(() =>
    glitchup()
  ), 240000);

module.exports = glitchup;
