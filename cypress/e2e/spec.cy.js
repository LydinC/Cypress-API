describe('Chuck Norris Tests', () => {
  it('Random Endpoint test', () => {
    cy.request({
      method: 'GET',
      url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
      headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': Cypress.env("X-RapidAPI-Key"),
        'X-RapidAPI-Host': 'Cypress.env("X-RapidAPI-Host")'
      }
    });
  })
})


