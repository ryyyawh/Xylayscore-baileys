const chalk = require('chalk');
const moment = require('moment');

const log = {
  info: (msg) => {
    console.log(`[${chalk.blue('INFO')}] ${chalk.gray(moment().format('HH:mm:ss'))} ➜ ${msg}`);
  },

  warn: (msg) => {
    console.log(`[${chalk.yellow('WARN')}] ${chalk.gray(moment().format('HH:mm:ss'))} ➜ ${msg}`);
  },

  error: (msg) => {
    console.log(`[${chalk.red('ERROR')}] ${chalk.gray(moment().format('HH:mm:ss'))} ➜ ${msg}`);
  },

  success: (msg) => {
    console.log(`[${chalk.green('XylaysIsDev')}] ${chalk.gray(moment().format('HH:mm:ss'))} ➜ ${msg}`);
  }
};

module.exports = log;