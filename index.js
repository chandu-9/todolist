// const app = require('express')();
// require('dotenv').config()
// const morgan = require('morgan')

// app.use(morgan('combined'))

// app.get('/', (req, res) => {
//     res.send("This is a test")
// })
// port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// });

//const inquirer = require('inquirer');
import inquirer from 'inquirer';

import Task from './task.js';


var tasks = ["Gym", "Programming", "Netflix"];

const task = new Task(tasks);


var menu = inquirer.prompt([
    {
        type: 'list',
        name: 'menuChoice',
        message: 'Select an option',
        choices: [
            "Add a new task",
            "View all tasks",
            "Update a task",
            "Delete a task",
            "Exit the app",
        ],
    },
]).then(function (answers) {
    var selectedOption = answers.menuChoice;
    switch (selectedOption) {
        case "Add a new task":
            task.add();
            break;
        case "View all tasks":
            task.show();
            break;
        case "Update a task":
            task.update();
            break;
        case "Delete a task":
            task.delete();
            break;
        case "Exit the app":
            return;
            break;
    }
});
