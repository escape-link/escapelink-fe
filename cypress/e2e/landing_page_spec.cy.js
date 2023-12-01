// describe('landing page', () => {
//   it('should show a landing page with a header, story, and button', () => {
//     cy.visit('http://localhost:3001/');
//     cy.get('header').within(() => {
//       cy.get('h1').should('contain', 'Escape Link')
//     });
//     cy.get('.landing-page').should('have.css', 'background-image')
//     .and('include', 'escapelink');
//     cy.get('.landing-page').within(() => {
//       cy.get('h2').should('contain', 'Choose your room!')
//       .get('.room-one').should('contain', 'Alien Escape!')
//       .get('.buttons').first().should('contain', 'Alien Escape!')
//       .get('.buttons').last().should('contain', 'Coming Soon')
//     })
//   })
//   it('should be able to visit a story about Alien Escape upon click', () => {
//     cy.visit('http://localhost:3001/');
//     cy.get('.room-one').click()
//     cy.url().should('eq', 'http://localhost:3001/room/wheres-bob')
//     cy.get('.back-home').click()
//     cy.url().should('eq', 'http://localhost:3001/')
//   })
  
// })