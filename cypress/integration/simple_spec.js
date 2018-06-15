const URL = 'http://localhost:3000';

describe('my first test', () => {
  it('visits homepage', () => {
    cy.visit(URL);
    cy.contains('noop');
  });
});
