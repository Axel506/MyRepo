'use strict';

/**
 * Returns a greeting message for the given name.
 * @param {string} name - The name to greet.
 * @returns {string} The greeting message.
 */
function greet(name) {
  if (!name) {
    return 'Hello, World!';
  }
  return `Hello, ${name}!`;
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet(process.argv[2]));
}
