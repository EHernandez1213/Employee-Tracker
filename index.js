var { default: inquirer } = require('inquirer');
const controller = require('./db/database.js');


inquirer = require('inquirer');

const mainselection = [
    {
        type: 'list',
        message: 'What do you want to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Remove a department', 'Remove a role', 'Remove an employee'],
        name: 'selection'
    }
];
(async function mainSelection() {
    inquirer
        .prompt(mainselection)
        .then(async answers => {
            switch (answers.selection) {
                case 'View all departments':
                    await viewDepartments();
                    break;
                case 'View all roles':
                    await viewRoles();
                    break;
                case 'View all employees':
                    await viewEmployees();
                    break;
                case 'Add a department':
                    await addDepartment();
                    break;
                case 'Add a role':
                    await addRole();
                    break;
                case 'Add an employee':
                    await addEmployee();
                    break;
                case 'Update an employee role':
                    await updateEmployee()
                    break;
                case 'Remove a department':
                    await removeDepartment();
                    break;
                case 'Remove a role':
                    await removeRole();
                    break;
                case 'Remove an employee':
                    await removeEmployee();
                    break;
                default:
                    break;
            }
            return mainSelection();
        });
})();

const addDepartmentPrompt = [
    {
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'name'
    }
]

const addDepartment = async () => {
    const department = await inquirer.prompt(addDepartmentPrompt)
    await controller.addDepartment(department)
    console.log('department added')
}

async function addRole() {
    const department = (await controller.viewAllDepartments())[0]
    const departmentChoices = department.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const roleId = await inquirer.prompt([
        {
            type: 'input',
            message: "What is the new role called?",
            name: 'title'
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
            name: 'department'
        }
    ])
    await controller.addRole(roleId)
}

async function addEmployee() {
    const role = (await controller.viewAllRoles())[0]
    const roleChoices = role.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const manager = (await controller.viewManagers())[0]
    const managerChoices = manager.map(({ id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));
    const employeeId = await inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'firstName'
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'lastName'
        },
        {
            type: 'list',
            message: 'What is their role?',
            choices: roleChoices,
            name: 'role'
        },
        {
            type: 'list',
            message: 'Who is their manager?',
            choices: managerChoices,
            name: 'manager'
        },
    ])
    await controller.addEmployee(employeeId)

}

async function updateEmployee() {
    const employee = (await controller.viewAllEmployees())[0]
    const employeeChoices = employee.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));
    const roles = (await controller.viewAllRoles())[0]
    console.log(roles);
    const roleChoices = roles.map((r) => ({
        name: r.title,
        value: r.id
    }));
    const updatedEmployee = await inquirer.prompt([
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

    await controller.updateEmployeeRole(updatedEmployee)

}

async function viewDepartments() {
    const departments = (await controller.viewAllDepartments())[0]
    console.table(departments)

}

async function viewRoles() {
    const roles = (await controller.viewAllRoles())[0]
    console.table(roles)

}

async function viewEmployees() {
    const employees = (await controller.viewAllEmployees())[0]
    console.table(employees)

}

async function removeDepartment() {
    const department = (await controller.viewAllDepartments())[0]
    const departmentChoices = department.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const departmentId = await inquirer.prompt({
        type: "list", name: "id", message: "Which department do you want to remove?", choices: departmentChoices
    })
    await controller.removeDepartment(departmentId)

}

async function removeRole() {
    const role = (await controller.viewAllRoles())[0]
    const roleChoices = role.map(({ id, title }) => ({
        name: title,
        value: id
    }));
    const roleId = await inquirer.prompt({
        type: "list", name: "id", message: "Which role do you want to remove?", choices: roleChoices
    })
    await controller.removeRole(roleId)

}

async function removeEmployee() {
    const employee = (await controller.viewAllEmployees())[0]
    const employeeChoices = employee.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));
    const employeeId = await inquirer.prompt({
        type: "list", name: "id", message: "Which employee do you want to remove?", choices: employeeChoices
    })
    await controller.removeEmployee(employeeId)

}
