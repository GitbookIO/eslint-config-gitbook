let result = '';

// Multi spaces are allowed for imports
const write      = require('./write');
const sendLetter = require('./sendLetter');

// For variable declaration
const hello   = 'Bonjour';
const message = 'le monde';
result        = write(`${hello} ${message}`);
result        = sendLetter(result);

module.exports = result;
