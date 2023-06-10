const { default: inquirer } = require('inquirer');

inquirer = require('inquirer');

const mainselection = [
    {
        type: 'list',
        message: 'What do you want to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        name: 'selection'
    }
]
async function mainSelection() {
    inquirer.prompt(mainselection).then(answers => {
        switch (answers.selection) {
            case 'View all departments':
                return addDepartment();
            case 'View all roles':
                return viewRoles();
            case 'View all employees':
                return viewEmployees();

            default:
                break;
        }
    })
}
const addDepartmentPrompt = [
    {
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'name'
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

const addDepartment = async () => {
    const department = await inquirer.prompt(addDepartmentPrompt)
    await connection.addDepartment(department)
    console.log('department added')
    mainSelection()
}
async function viewRoles() {
    const roles = await connection.viewAllRoles()
    console.table(roles)
    mainSelection()
}
async function removeDepartment() {
    const department = await connection.viewDepartments()
    const departmentChoices = department.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const { departmentId } = await inquirer.prompt({
        type: "list", name: "departmentId", message: "mm", choices: departmentChoices
    })
    await connection.removeDepartment(departmentId)
    mainSelection()
}


