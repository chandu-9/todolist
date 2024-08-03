import inquirer from 'inquirer';

export default class Task {
    static array = [];
    constructor(array) {
        Task.array = array;
        console.log("Task class is invoked");
    }
    add() {
        var newTask = inquirer.prompt({
            type: 'input',
            name: 'task',
            message: 'Enter the new task:',
        }).then(function (newTask) {
            var task = newTask.task;
            Task.array.push(task);
            console.log("Your task is added ".concat(task));
        });
    }

    update() {
        inquirer.prompt({
            type: 'number',
            name: 'updateInput',
            message: 'Enter the task number you want to update',
        }).then(function (updateChoiceInput) {
            var updateInput = updateChoiceInput.updateInput - 1;
            inquirer.prompt({
                type: 'input',
                name: 'update',
                message: 'Enter the Updated task'
            }).then(function (updateChoice) {
                var updated = updateChoice.update;
                Task.array[updateInput] = updated;
                
                console.log("Your task \"".concat(updated, "\" is updated"));
            });
        });
    }

    delete() {
        inquirer.prompt({
            type: 'number',
            name: 'deleteInput',
            message: 'Enter the task number you want to delete',
        }).then(function (deleteChoice) {
            var deleteInput = deleteChoice.deleteInput - 1;
            if (deleteInput >= 0 && deleteInput < Task.array.length) {
                Task.array.splice(deleteInput, 1);
                console.log("Task at index ".concat(deleteInput + 1, ", ").concat(Task.array[deleteInput], " has been deleted."));
            }
            else {
                console.log('Invalid task number');
            }
        });
    }

    show() {
        if (Task.array.length > 0) {
            for (var i = 0; i < Task.array.length; i++) {
                console.log(Task.array[i]);
            }
        }
    }
}