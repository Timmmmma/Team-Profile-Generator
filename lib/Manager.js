// importing the Employee parent class
const Employee = require('./Employee');

// // adding role method and office number perimeter to the Engineer class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }
    getofficeNumber () {
        return this.officeNumber;
    }
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 