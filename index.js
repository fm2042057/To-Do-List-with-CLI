import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.yellow.bold("\n \t Welcome to Coding with FAHAD MEHMOOD  - ToDo List Application \n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            message: chalk.green("Enter Your New Task"),
            type: "input",
        },
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task Added Successfully`);
    let addmoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.green("Do You Want To Add More Task?"),
            default: "false",
        },
    ]);
    condition = addmoreTask.addmore;
}
console.log("Your Updated Task:", todoList);
