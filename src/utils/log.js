const chalk = require('chalk');
const { getType } = require('./');

const _log = (...value) => console.log(...value);

/**
 * log
 */
module.exports = {
  base: function (type, value, color = undefined) {
    if (getType(value) === '[object Array]') value = value.join(' ');

    if (chalk[type] === undefined) {
      _log('');
      this.warn(`chalk.${type} === undefined`);
      return _log(value, '\n');
    }
    const _base = (_color) => chalk[type](_color);
    const typeText = {
      blue: 'Info',
      green: 'Success',
      hex: 'Warn',
      red: 'Error',
    };

    _log('');
    if (color) {
      _log(
        chalk.bgHex(color).black(` ${typeText[type]} `),
        _base(color)(value)
      );
    } else {
      const bg = { blue: 'bgBlue', green: 'bgGreen', red: 'bgRed' };
      _log(chalk[bg[type]].black(` ${typeText[type]} `), _base(value));
    }
  },
  info: function (...value) {
    this.base('blue', value);
  },
  success: function (...value) {
    this.base('green', value);
  },
  warn: function (...value) {
    this.base('hex', value, '#FF9800');
  },
  error: function (...value) {
    this.base('red', value);
  },
};
