// a parent class Employee
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // return the current name
    getName () {
        return this.name;
    }

    // return the current id
    getId () {
        return this.id;
    }   

    // return the current email
    getEmail () {
        return this.email;
    }

    // return the current role
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 