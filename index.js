const max = process.env.npm_config_maxNumber
  ? parseInt(process.env.npm_config_maxNumber)
  : 1;

const min = process.env.npm_config_minNumber
  ? parseInt(process.env.npm_config_minNumber)
  : 0;

const num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(max, min);
console.log('Random Number Generated Is:', num);

// for printing passed arguments in console
const parseArgs = (args) => {
  const parsedArgs = {};

  args.forEach((arg) => {
    const parts = arg.split('=');
    console.log(parts);
    parsedArgs[parts[0]] = parts[1];
  });

  return parsedArgs;
};

const args = parseArgs(process.argv.slice(2));

console.log(args);
// To check how args work
// console.log(process.argv)
