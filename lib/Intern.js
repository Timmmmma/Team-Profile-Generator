// importing the Employee parent class
const Employee = require('./Employee');

// // adding role method and school perimeter to the Engineer class
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // 
        super (name, id, email); 

        this.school = school; 
    }
    getSchool () {
        return this.school;
    }
    getRole () {
        return "Intern";
    }
}
 
module.exports = Intern; 