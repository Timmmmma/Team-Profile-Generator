
// receive manager info then create card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card employee-card">
            <div class="card-header" style="background-color:powderblue;">
                <h3>${manager.name}</h3>
                <h4><i class="bi bi-clipboard2-check-fill"></i>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// receive engineer info then create card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card employee-card">
            <div class="card-header" style="background-color:yellowgreen;">
                <h3>${engineer.name}</h3>
                <h4><i class="bi bi-laptop-fill"></i>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// receive intern info then create card
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card employee-card">
            <div class="card-header" style="background-color:lightsalmon;">
                <h3>${intern.name}</h3>
                <h4><i class="bi bi-person-badge"></i>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// receive teamArray from index.js
generateMarkdown = (data) => {
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            cardArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            cardArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            cardArray.push(internCard);
        }
        
    }


    const employeeCards = cardArray.join('')
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
  </head>
  <body>
      <header class="jumbotron" >        
      <h1 class="text-center">Team Profile</h1>      
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = generateMarkdown; 