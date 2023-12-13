import chalk from "chalk";

console.log(chalk.blue("Hello World!"));

// Make sure to have "type: module" in .json file or this won't work. //

console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));