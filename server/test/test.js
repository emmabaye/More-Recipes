'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../server.js');

describe('API endpoint /api/recipes', () => {

  before(() => {

  });

  after(() => {

  });

  // GET - index
  it('should title json', () => {
    return chai.request(app)
      .get('/')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      });
  });

  // GET - Return all recipes
  it('should return all recipes', () => {
    return chai.request(app)
      .get('/api/recipes')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      });
  });

  // POST - Post a recipe
  it('should return all recipes', () => {
    return chai.request(app)
      .post('/api/recipes')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      });
  });

  // PUT - modify a recipe
  it('should return all recipes', () => {
    return chai.request(app)
      .put('/api/recipes/4')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      });
  })

  // POST - post a review for recipe
  it('should return all recipes', () => {
    return chai.request(app)
      .put('/api/recipes/4')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      });
  })
  
});
