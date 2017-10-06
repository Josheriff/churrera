const supertest = require('supertest');
const config = require('../../../config.json');
const shortid = require('shortid');
const should = require('chai').should();
let route = 'localhost:3000/users';

const api = supertest('localhost:3000');

describe('API', () => {
  describe(`Endpoint for users`, () => {
    before(async () => {

      existingUser = {}; // for save changes later
          
      userModel = {
        name: shortid.generate(),
        email: `${shortid.generate()}@email.com`,
        password: shortid.generate(),
      };
      
      
    });    

    it('Create a user', (done) => {
      api
        .post(route)
        .send(userModel)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) {
          	console.log(err, '<<<<<<');	
          	return done(err);
          }
          res.body.should.have.property('name', userModel.name);
          existingUser = res.body;
          return done();
        });
    });

    it('Get a wrong user', (done) => {
      api
        .get(`${route}${shortid.generate()}`)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.have.property('code', 'http.notFound');
          return done();
        });
    });

    it('Get a user', (done) => {
      api
        .get(`${route}${existingUser._id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err){
            return done(err);
          }
          res.body.should.have.property('_id', existingUser._id);
          return done();
        });
    });

    it('Get all user', (done) => {
      api
        .get(route)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.be.instanceof(Array);
          res.body.should.have.length.at.most(10);
          return done();
        });
    });
   

    it('Remove a user', (done) => {
      api
        .delete(`${route}${existingUser._id}`)
        .set('Content-Type', 'application/json')
        .expect(204)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
  });
});
