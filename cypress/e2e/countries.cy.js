import { countriesSchema } from "../schemas/countries_schema";
import { validateSchema } from "../support/schema_validator";
describe('Countries Endpoint Tests', () => {
  
  it('GET - Countries Endpoint - Validate Schema', () => {
      cy.getCountries().then((response) =>
      {
        expect(validateSchema(countriesSchema, response)).to.be.true;  
      });
    
    });

  it('GET - Countries Endpoint - Verify Success Call', () => {
    cy.getCountries().then((response) => {
      expect(response.body).to.have.property('results', 231); 
      expect(response.body.response).to.be.an('array').that.includes('Malta');
      expect(response.body.errors).to.be.an('array').that.is.empty;
    });
  });
  
  it('GET - Countries Endpoint - Verify Unauthorised Access', () => {
    cy.request({
      method: 'GET',
      url: '/countries',
      headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': "invalid key",
        'X-RapidAPI-Host': Cypress.env("X-RapidAPI-Host")
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(403);
    });
  });




});
