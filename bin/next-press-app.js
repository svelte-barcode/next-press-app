#! /usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const chalk = require('chalk')
const lib = require('..')

const consoles = lib.consoles

let projectName

program
  .version(pkg.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(function (name) {
    projectName = name
    console.log(projectName)
  })
  .allowUnknownOption()
  .on('--help', consoles.help)
  .parse(process.argv);
