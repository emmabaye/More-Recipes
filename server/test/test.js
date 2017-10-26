

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../server.js');

describe('API endpoint /api/recipes', () => {
  before(() => {

  });

  after(() => {

  });

  // GET - Return all recipes
  it('should return all recipes', () => chai.request(app)
    .get('/api/recipes')
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    }));

  // POST - Post a recipe
  it('should return all recipes', () => chai.request(app)
    .post('/api/recipes')
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    }));

  // PUT - modify a recipe
  it('should return all recipes', () => chai.request(app)
    .put('/api/recipes/4')
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    }));

  // POST - post a review for recipe
  it('should return all recipes', () => chai.request(app)
    .put('/api/recipes/4')
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    }));
});
