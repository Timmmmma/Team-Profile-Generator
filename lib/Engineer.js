// importing the Employee parent class
const Employee = require("./Employee");

// // adding role method and github perimeter to the Engineer class
class Engineer extends Employee {
    constructor (name, id, email, github) { 
        super (name, id, email);

        this.github = github; 
    }
    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 