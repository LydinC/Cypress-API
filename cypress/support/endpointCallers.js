//TODO: Work on abstract method getRequest() 

export const getCountries = (country) => {
    
    var options = {
        method: 'GET',
        url: '/countries',
        headers: {
           accept: 'application/json',
           'X-RapidAPI-Key': Cypress.env("X-RapidAPI-Key"),
           'X-RapidAPI-Host': Cypress.env("X-RapidAPI-Host")
        },
        qs: {},
        failOnStatusCode: false
      };
    
      if (country) {
        options.qs = { search: country };
      }
    
    cy.request(options);
}  

export const getStatistics = (country) => {
    
  var options = {
      method: 'GET',
      url: '/statistics',
      headers: {
         accept: 'application/json',
         'X-RapidAPI-Key': Cypress.env("X-RapidAPI-Key"),
         'X-RapidAPI-Host': Cypress.env("X-RapidAPI-Host")
      },
      qs: {},
      failOnStatusCode: false
    };
  
    if (country) {
      options.qs = { country: country };
    }
  
  cy.request(options);
}  

