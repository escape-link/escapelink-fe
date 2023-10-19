describe('landing page', () => {
  it('should show a landing page with a header, story, and button', () => {
    cy.visit('http://localhost:3001/');
    cy.get('header').within(() => {
      cy.get('h1').should('contain', 'Escape Link')
      cy.get('.alien').should('have.attr', 'src')
      cy.get('img').should('be.visible')
      cy.get('.alien').should('have.attr', 'alt', 'alien')
    });
    cy.get('.landing-page-body').should('have.css', 'background-image')
    .and('include', 'big-donut');
    cy.get('.story').within(() => {
      cy.get('p').first().should('contain', 'You and your team are fringe scientists')
      cy.get('p').last().should('contain', 'Are you ready to begin your escape room adventure?')
    })
    cy.get('.start-game').should('exist')
  })
  it('should be able to visit a game room on click', () => {
    cy.intercept('POST', 'http://localhost:3000/api/v0/games', {
      statusCode: 200,
      body: {
        "room_name": "crazy-brown-Gastly",
        "game_link": "/api/v0/games?room_name=crazy-brown-Gastly"
      }
    })
    cy.visit('http://localhost:3001/');
    cy.get('.start-game').click()
    cy.url().should('eq', 'http://localhost:3001/room/crazy-brown-Gastly')
  })
})
