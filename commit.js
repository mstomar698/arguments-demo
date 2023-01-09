#! /usr/bin/env node

const shell = require('shelljs');

const file_name = 'arguments-demo';

console.log('output');
shell.exec('echo works');
shell.exec('git init');
shell.exec(
  `git remote add origin https://github.com/mstomar698/${file_name}.git`
);
shell.exec('echo node_modules >> .gitignore');
shell.exec('git add . && git commit -m "Adding arg-demo files');
shell.exec('git push --set-upstream origin master');
