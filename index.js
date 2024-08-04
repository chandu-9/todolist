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
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';


   // Load the list of repositories
// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

   const reposFile = resolve(__dirname, 'repos.json');
   const reposData = await readFile(reposFile, 'utf8');
   const repos = JSON.parse(reposData);

const questions = [
    {
      type: 'checkbox',
      name: 'fruits',
      message: 'Select the fruits you like:',
      choices: repos
    }
  ];
  
  inquirer.prompt(questions).then(answers => {
    console.log('You selected:', answers.fruits);
  }).catch(error => {
    console.error('Error:', error);
  });

var menu = inquirer.prompt([
    {
        type: 'checkbox',
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
