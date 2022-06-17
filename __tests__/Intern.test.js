const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('zhentian', 1, 'zhentian222@gmail', 'UW');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('zhentian', 1, 'zhentian222@gmail', 'UW');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('zhentian', 1, 'zhentian222@gmail.com', 'UW');

    expect(intern.getRole()).toEqual("Intern");
}); 