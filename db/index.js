inquirer = require('inquirer');

const mainselection = [
    {
        type: 'list',
        message: 'What do you want to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        name: 'selection'
    }
]

const addDepartmentPrompt = [
    {
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'addedDepartment'
    }
]

const addRolePrompt = [
    {
        type: 'input',
        message: "What is the new role called?",
        name: 'addedRole'
    },
    {
        type: 'number',
        message: 'What is the salary for this role?',
        name: 'salary'
    },
    {
        type: 'list',
        message: 'Which department is this role for?',
        choices: [], //an array of departments in db
        name: 'roleDepartment'
    }
]

const addEmployeePrompt = [
    {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'employeeFirstName'
    },
    {
        type: 'input',
        message: "What is the employee's last name?",
        name: 'employeeLastName'
    },
    {
        type: 'list',
        message: 'Who is their manager?',
        choices: [], //an array of managers
        name: 'employeeManager'
    },
]

const updateEmployeePrompt = [
    {
        type: 'list',
        message: "Who's role is being updated?",
        choices: [], //an array of employees
        name: 'updatedEmployee'
    },
    {
        type: 'list',
        message: 'What is their new role?',
        choices: [], //an array of roles
        name: 'updatedEmployeeRole'
    }
]