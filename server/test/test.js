import chai from 'chai';
import app from '../server.js';

chai.use(require('chai-http'));

const expect = chai.expect;

describe('API endpoints /api/v1/recipes ', () => {
  before(() => {

  });

  after(() => {

  });

  // GET - index
  it('should return json', () => chai.request(app)
    .get('/')
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      //expect(res.body).to.have.property('title');
    }));


  // GET - Return all recipes
  it('should return empty array', () => chai.request(app)
    .get('/api/v1/recipes')
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
     // expect(res.body.length).to.equal(0);
    }));

   // POST - Should fail authentication
  it('should fail authentication', () => chai.request(app)
    .post('/api/v1/users/signin')
    .send({email:"tom@tom.com", password:"grer"})
    .then((res) => {
      expect(res).to.have.status(400);
      //expect(res.body).to.be.an('array');
     // expect(res.body.length).to.equal(0);
    }));


/*
  // POST - Post a recipe
  it('should post a recipe ', () => {
    const initialLength = recipes.length;
    return chai.request(app)
      .post('/api/v1/recipes')
      .send({ id: '6', name: 'Pancake' })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.length).be.equal(initialLength + 1);
      });
  });

  // PUT - modify a recipe
  it('should modify a recipe', () => {
    return chai.request(app)
      .put('/api/v1/recipes/4')
      .send({name: 'Akara'})
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body[3].name).to.equal('Akara');
      });
  });

  // POST - post a review for recipe
  it('post a review for a recipe', () => chai.request(app)
    .post('/api/v1/recipes/4/reviews')
    .send({ name: 'John', review: 'Great recipe' })
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body[3].reviews[0]).to.contain({ name: 'John', review: 'Great recipe' });
    }));

  // DELETE - delete a recipe
  it('should delete a recipe', () => {
    const initialLength = recipes.length;
    chai.request(app)
      .post('/api/v1/recipes/4')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.length).to.equal(initialLength - 1);
        expect(res.body[3].id).to.not.equal('4');
      });
  });



*/


});
