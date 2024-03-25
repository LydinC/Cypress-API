import { countriesSchema } from "../schemas/countries_schema";
import { validateSchema } from "../support/schema_validator";

describe('Countries Endpoint Tests', () => {

  let countriesData;
  before( () => 
    cy.fixture("countries").then((data)=> {
      countriesData = data;
  }));
  
  it('GET - Countries Endpoint - Verify Endpoint is Functional and Available', () => {
    cy.getCountries().then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('GET - Countries Endpoint - Validate Schema', () => {
    cy.getCountries().then((response) =>
    {
      expect(validateSchema(countriesSchema, response)).to.be.true;  
    });
  
  });

  it('GET - Countries - Search Valid Country', () => {
    cy.getCountries(countriesData.validCountry).then((response) =>
    {
      expect(response.body).to.have.property('results', 1); 
      expect(response.body.response).to.deep.equal([countriesData.validCountry]);
    });
  });

  it('GET - Countries - Search Invalid Country Name', () => {
    cy.getCountries(countriesData.invalidCountry).then((response) =>
    {
      expect(response.body).to.have.property('results', 0); 
      expect(response.body.response).to.be.an('array').that.is.empty;
    });
  });

  it('GET - Countries - With Invalid Parameter Input', () => {

    countriesData.invalidInputs.forEach((scenario) => {
      cy.log(scenario.country);
      cy.log(scenario.expectedError);
      
      cy.getCountries(scenario.country).then((response) =>
      {
        expect(response.body.errors).to.have.property('search', scenario.expectedError);
        expect(response.body).to.have.property('results', 0); 
        expect(response.body.response).to.be.an('array').that.is.empty;
      });  
    });
  });

  it('GET - Countries Endpoint - Verify All Details', () => {
    cy.getCountries().then((response) => {
      expect(response.body).to.have.property('results', 231); 
      expect(response.body.response).to.be.an('array').that.includes(countriesData.validCountry);
      //possibly assert full list of countries against a fixture as list should be relatively static (but might be an overkill)
      expect(response.body.errors).to.be.an('array').that.is.empty;
    });
  });

  it('GET - Countries Endpoint - Verify Forbidden Access', () => {
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
