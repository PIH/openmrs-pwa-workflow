describe('Login Tests', () => {

  it('Should login in and log out', () => {

    // these are custom command I defined into commands.js
    cy.login();
    cy.wait(3000);
    cy.get('.user-display')
      .should('exist')
      .should('be.visible');
    
    cy.wait(5000);

    cy.get('.user-display')
      .should('exist')
      .should('be.visible');
    cy.logout();
  });

  it('Should not login with invalid username', function () {
    const username = 'some-ranndom-username';
    const password = 'password';
    cy.login(username, password, false);
    cy.wait(5000);

    cy.get('.user-display')
      .should('not.exist');
    
    cy.get('.alert.alert-info').contains('Invalid username or password')
      .should('exist');
  });

});
