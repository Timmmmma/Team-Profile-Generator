const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('zhentian', 1, 'zhentian222@gmail', 100);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('zhentian', 1, 'zhentian222@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 