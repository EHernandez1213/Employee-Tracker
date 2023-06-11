const { default: inquirer } = require('inquirer');
const { connection } = require('./db');

inquirer = require('inquirer');

const mainselection = [
    {
        type: 'list',
        message: 'What do you want to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Remove a department', 'Remove a role', 'Remove an employee'],
        name: 'selection'
    }
]
async function mainSelection() {
    inquirer.prompt(mainselection).then(answers => {
        switch (answers.selection) {
            case 'View all departments':
                return viewDepartments();
            case 'View all roles':
                return viewRoles();
            case 'View all employees':
                return viewEmployees();
            case 'Add a department':
                return addDepartment();
            case 'Add a role':
                return addRole();
            case 'Add an employee':
                return addEmployee();
            case 'Update an employee role':
                return updateEmployee()
            case 'Remove a department':
                return removeDepartment();
            case 'Remove a role':
                return removeRole();
            case 'Remove an employee':
                return removeEmployee();
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

const addDepartment = async () => {
    const department = await inquirer.prompt(addDepartmentPrompt)
    await connection.addDepartment(department)
    console.log('department added')
    mainSelection()
}

async function addRole() {
    const department = await connection.viewDepartments()
    const departmentChoices = department.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const { roleId } = await inquirer.prompt([
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
            choices: departmentChoices,
            name: 'roleDepartment'
        }
    ])
    await connection.addRole(roleId)
    mainSelection()
}

async function addEmployee() {
    const role = await connection.viewRoles()
    const roleChoices = role.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const manager = await connection.viewManagers()
    const managerChoices = manager.map(({ id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));
    const { employeeId } = await inquirer.prompt([
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
            message: 'What is their role?',
            choices: roleChoices,
            name: 'employeeRole'
        },
        {
            type: 'list',
            message: 'Who is their manager?',
            choices: managerChoices,
            name: 'employeeManager'
        },
    ])
    await connection.addEmployee(employeeId)
    mainSelection()
}

async function updateEmployee() {
    const employee = await connection.viewEmployees()
    const employeeChoices = employee.map(({ id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));
    const role = await connection.viewRoles()
    const roleChoices = role.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const { updatedEmployee } = await inquirer.prompt([
        {
            type: 'list',
            message: "Who's role is being updated",
            choices: employeeChoices,
            name: 'updateEmployee'
        },
        {
            type: 'list',
            message: 'What is their new role?',
            choices: roleChoices,
            name: 'updateRole'
        }
    ])
    await connection.updateEmployee(updatedEmployee)
    mainSelection()
}

async function viewDepartments() {
    const departments = await connection.viewAllDepartments()
    console.table(departments)
    mainSelection()
}

async function viewRoles() {
    const roles = await connection.viewAllRoles()
    console.table(roles)
    mainSelection()
}

async function viewEmployees() {
    const employees = await connection.viewAllEmployees()
    console.table(employees)
    mainSelection()
}

async function removeDepartment() {
    const department = await connection.viewDepartments()
    const departmentChoices = department.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const { departmentId } = await inquirer.prompt({
        type: "list", name: "departmentId", message: "Which department do you want to remove?", choices: departmentChoices
    })
    await connection.removeDepartment(departmentId)
    mainSelection()
}

async function removeRole() {
    const role = await connection.viewRoles()
    const roleChoices = role.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const { roleId } = await inquirer.prompt({
        type: "list", name: "roleId", message: "Which role do you want to remove?", choices: roleChoices
    })
    await connection.removeRole(roleId)
    mainSelection()
}

async function removeEmployee() {
    const employee = await connection.viewEmployees()
    const employeeChoices = employee.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const { employeeId } = await inquirer.prompt({
        type: "list", name: "employeeId", message: "Which employee do you want to remove?", choices: employeeChoices
    })
    await connection.removeEmployee(employeeId)
    mainSelection()
}
