import chalk  from 'chalk';
// const chalk =require('chalk')

let world='Hello world'


console.log(chalk.red(world));
console.log(chalk.bold(world));
console.log(chalk.bgYellow(world));
console.log(chalk.underline(world));
console.log(chalk.hex('#FF5733')(world));

console.log(chalk.bold(world).toString());
console.log(chalk.bgYellow(world).toString());
console.log(chalk.underline(world).toString());