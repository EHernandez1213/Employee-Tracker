const connection = require('../connection');

class DB {
    constructor(connection) {
        this.connection = connection
    }
    addDepartment(data) {
        return this.connection.query('INSERT INTO department SET ?', data)
    }
    viewDepartments() {
        return this.connection.query('SELECT * FROM department')
    }
    removeDepartment(id) {
        return this.connection.query('DELETE FROM department WHERE id = ?', id)
    }
    addRole(data) {
        return this.connection.query('INSERT INTO role SET ?', data)
    }
    viewRoles() {
        return this.connection.query('SELECT role.id, title, salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id')
    }
    removeRole(id) {
        return this.connection.query('DELETE FROM role WHERE id = ?', id)
    }
    addEmployee(data) {
        return this.connection.query('INSERT INTO employee SET ?', data)
    }
    viewEmployees() {
        return this.connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id ')
    }
    removeEmployee(id) {
        return this.connection.query('DELETE FROM employee WHERE id = ?', id)
    }
    updateEmployeeRole(data) {
        return this.connection.query('UPDATE employee SET ? WHERE ? ', data)
    }
}
module.exports = new DB(connection);