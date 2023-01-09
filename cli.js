#! /usr/bin/env node
const yargs = require('yargs');
const add = require('./main');
const coarseNumber = (text) => {
  const value = Number(text);
  if (Number.isFinite(value)) {
    return value;
  }
  throw new Error(`${text} is not a number`);
};

const builder = (command) => {
  command
    .positional('firstOperand', {
      describe: 'First operand',
      coerce: coarseNumber,
    })
    .positional('secondOperand', {
      describe: 'second operand',
      coerce: coarseNumber,
    });

  const handler = ({ firstOperand, secondOperand }) =>
    console.log(add(firstOperand, secondOperand));

  yargs
    .command('*<firstOperand> <secondOperand>', false, builder, handler)
    .parse();
};
const ans = add(Number(process.argv[2]), Number(process.argv[3]));
console.log(ans);
