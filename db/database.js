
const mysql = require('mysql2');
const util = require('util')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);
// console.log(connection)

class DB {
    constructor(connection) {
        this.connection = connection
    }
    addDepartment(data) {
        return this.connection.promise().query('INSERT INTO department SET ?', data)
    }
    viewAllDepartments() {
        return this.connection.promise().query('SELECT * FROM department')
    }
    removeDepartment(id) {
        return this.connection.promise().query('DELETE FROM department WHERE ?', id)
    }
    addRole(data) {
        return this.connection.promise().query('INSERT INTO role SET title = ?, salary = ?, department_id = ?', [data.title, data.salary, data.department])
    }
    viewAllRoles() {
        return this.connection.promise().query('SELECT role.id, title, salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id')
    }
    removeRole(id) {
        return this.connection.promise().query('DELETE FROM role WHERE ?', id)
    }
    addEmployee(data) {
        return this.connection.promise().query('INSERT INTO employee SET first_name = ?, last_name = ?, role_id = ?, manager_id = ?', [data.firstName, data.lastName, data.role, data.manager])
    }
    viewAllEmployees() {
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id ')
    }
    viewManagers() {
        return this.connection.promise().query("SELECT id, first_name, last_name FROM role LEFT JOIN employee WHERE title = 'manager' ")
    }
    removeEmployee(id) {
        return this.connection.promise().query('DELETE FROM employee WHERE ?', id)
    }
    updateEmployeeRole(data) {
        return this.connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ? ', [data.updateRole, data.updateEmployee])
    }
}
// const controller = new DB(connection);
module.exports = new DB(connection);