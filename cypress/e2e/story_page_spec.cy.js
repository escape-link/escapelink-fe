describe('story page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3000/api/v0/games', {
      statusCode: 200,
      body: {
          "game_name": "crazy-brown-Gastly",
          "game_link": "/api/v0/games?game_name=crazy-brown-Gastly"
        }
      })
    cy.visit('http://localhost:3001/')
  })
  it('should see a story page', () => {
    cy.get('.room-one').click()
    cy.url().should('eq', 'http://localhost:3001/room/wheres-bob')
    cy.get('.story-body').should('have.css', 'background-image')
    .and('include', 'big-donut');
    cy.get('header').should('contain', 'Escape Link')
    cy.get('.story-body').within(() => {
      cy.get('.back-home').should('contain', 'Back To Home')
      cy.get('p').first().should('contain', 'You and your team are fringe scientists')
      cy.get('p').last().should('contain', 'Are you ready to begin your escape room adventure?')
    })
    cy.get('.start-game').should('exist')
  })
  it('should be able to visit a game room on click', () => {
    cy.get('.room-one').click()
    cy.url().should('eq', 'http://localhost:3001/room/wheres-bob')
    cy.get('.start-game').click()
   
    cy.url().should('eq', 'http://localhost:3001/roomOne/wheres-bob/crazy-brown-Gastly')
    })
})