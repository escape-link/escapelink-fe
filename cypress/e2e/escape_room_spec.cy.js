describe('escape room', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3000/api/v0/games', {
      statusCode: 200,
      body: {
          "game_name": "crazy-brown-Gastly",
          "game_link": "/api/v0/games?game_name=crazy-brown-Gastly"
        }
      }).as('escapeRoom')
    cy.visit('http://localhost:3001/')
  })
  it('should show a message that the answer is wrong if the input is wrong and the input should clear if a user clicks backsapce', () => {
    cy.get('.room-one').click()
    cy.url().should('eq', 'http://localhost:3001/wheres-bob')
    cy.get('.start-game').click()
    cy.get('.clock').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Riddle')
      .get('p').should('contain', 'We come from a place beyond')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').last().click()
    })
    cy.get('.clock').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Riddle')
      .get('p').should('contain', 'We come from a place beyond')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').first().click()
      cy.get('p').should('contain', 'Incorrect: Please try again')
      cy.get('input').type('{backspace}{backspace}{backspace}')
      cy.get('input').type('another one').should('have.value', 'another one')
      .get('button').last().click()
    })
    cy.get('.room').should('not.contain', '.popup');
    cy.get('.bike').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'The slap heard round the world.')
      .get('p').should('contain', 'This actor is famous')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').last().click()
    })
    cy.get('.bike').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'The slap heard round the world.')
      .get('p').should('contain', 'This actor is famous')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').first().click()
      cy.get('p').should('contain', 'Incorrect: Please try again')
      cy.get('input').type('{backspace}{backspace}{backspace}')
      cy.get('input').type('another one').should('have.value', 'another one')
      .get('button').last().click()
    })

    cy.get('.room').should('not.contain', '.popup');
    cy.get('.plant').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Some truths can only be found in the dark.')
      .get('p').should('contain', 'Search the room.')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').last().click()
    })
    cy.get('.plant').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Some truths can only be found in the dark.')
      .get('p').should('contain', 'Search the room.')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').first().click()
      cy.get('p').should('contain', 'Incorrect: Please try again')
      cy.get('input').type('{backspace}{backspace}{backspace}')
      cy.get('input').type('another one').should('have.value', 'another one')
      .get('button').last().click()
    })
    cy.get('.room').should('not.contain', '.popup');
    
    cy.get('.desk-comp').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Looks like Bob\'s been decoding a cipher')
      .get('p').should('contain', 'What does it mean?')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').last().click()
    })
    cy.get('.desk-comp').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Looks like Bob\'s been decoding a cipher')
      .get('p').should('contain', 'What does it mean?')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').first().click()
      cy.get('p').should('contain', 'Incorrect: Please try again')
      cy.get('input').type('{backspace}{backspace}{backspace}')
      cy.get('input').type('another one').should('have.value', 'another one')
      .get('button').last().click()
    })
    cy.get('.room').should('not.contain', '.popup');

    cy.get('.radio').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Radio Frequency: Tune to the correct station.')
      .get('p').should('contain', 'The first digit of the radio station')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').last().click()
    })
    cy.get('.radio').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Radio Frequency: Tune to the correct station.')
      .get('p').should('contain', 'The first digit of the radio station')
      .get('input').type('ahh').should('have.value', 'ahh')
      .get('button').first().click()
      cy.get('p').should('contain', 'Incorrect: Please try again')
      cy.get('input').type('{backspace}{backspace}{backspace}')
      cy.get('input').type('another one').should('have.value', 'another one')
      .get('button').last().click()
    })
    cy.get('.room').should('not.contain', '.popup');
  })
  it('should show a victory page after all puzzles are solved and can go back home upon click', () => {
    cy.get('.room-one').click()
    cy.url().should('eq', 'http://localhost:3001/wheres-bob')
    cy.get('.start-game').click()
    cy.get('.clock').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Riddle')
      .get('p').should('contain', 'We come from a place beyond')
      .get('input').type('aliens').should('have.value', 'aliens')
      .get('button').first().click()
    })
    cy.get('.clock').should('have.css', 'pointer-events', 'none')
    cy.get('.bike').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'The slap heard round the world.')
      .get('p').should('contain', 'This actor is famous')
      .get('input').type('will smith').should('have.value', 'will smith')
      .get('button').first().click()
    })
    cy.get('.plant').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Some truths can only be found in the dark.')
      .get('p').should('contain', 'Search the room.')
      .get('input').type('alpha centauri').should('have.value', 'alpha centauri')
      .get('button').first().click()
    })
    cy.get('.plant').should('have.css', 'pointer-events', 'none')
    cy.get('.lamp').click()
    cy.get('.room').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    cy.get('.lamp').click()
    cy.get('.room').should('have.css', 'background-image').and('include', 'blue-bg')
    cy.get('.desk-comp').click()
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Looks like Bob\'s been decoding a cipher')
      .get('p').should('contain', 'What does it mean?')
      .get('input').type('portal').should('have.value', 'portal')
      .get('button').first().click()
    })
    cy.get('.desk-comp').should('have.css', 'pointer-events', 'none')
    cy.get('.radio').click();
    cy.get('.popup').within(() => {
      cy.get('h2').should('contain', 'Radio Frequency: Tune to the correct station.')
        .get('p').should('contain', 'The first digit of the radio station')
        .get('input').type('94.5').should('have.value', '94.5')
        .get('button').first().click();
    });
    cy.get('.victory-page').within(() => {
      cy.get('h2').should('contain', 'Room 1 complete.')
    })
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })

})