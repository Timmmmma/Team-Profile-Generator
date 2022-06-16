const inquirer = require('inquirer');
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateMarkdown = require('./utils/generateMarkdown.js');

const teamArray = [];



function addMember() {
    inquirer.prompt([
        {
            type: 'list',
            message: "Please select a role below.",
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: 'input',
            message: "Please enter the name.",
            name: 'name',
                   
        },
        {
            type: 'input',
            message: "Please enter the ID number",
            name: 'id',
            
        },
        {
            type: 'input',
            message: "Please enter the email address?",
            name: 'email',
                   
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the office number",
            when: (input) => input.role === "Manager",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the school name",
            when: (input) => input.role === "Intern",
            
        },
        {
            type: "list",
            message: "Would you want to add a new team member?",
            choices: ["yes", "no"],
            name: "moreMembers"
        }
    ])
    .then (employeeData =>  {
        let { name, id, email, role, officeNumber, github, school, moreMembers } = employeeData; 
        let employee; 

        if (role === "Manager") {
            employee = new Manager (name, id, email, officeNumber);

            console.log(employee);

        } else if (role === "Engineer") {
             employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        console.log(teamArray);
        if(moreMembers === "yes"){
            addMember()
        }else {
            writeToFile()
            quit();
        }
    })
    
}

function quit() {
    console.log("\nGoodbye!");
    process.exit(0);
}

addMember()




//Create a function to write html file
//function writeToFile() {
    //console.log("Processing!");
    //fs.writeFile('./dist/index.html', generateMarkdown(teamArray));
//}

function writeToFile () {
    console.log("Processing!");
    fs.writeFileSync(
      "./dist/index.html",generateMarkdown(teamArray),  
    );
    console.log('Successfully created index.html file!')
    
  }
