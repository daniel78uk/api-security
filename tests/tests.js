'use strict';

var chai = require('chai');
var expect = require('chai').expect;
var request = require('supertest');

// import libs
var express = require('express');
var apiSecurity = require('../index');

describe('API security', function() {
  var app = {};

  beforeEach(function() {
    app = express();
  });

  it('Should check that the parameter is an Express object', function() {
    apiSecurity.secure(app);
    expect(app).to.not.equal(false);
  });


  it('Should add headers and return an Express object', function() {
    apiSecurity.secure(app);
    let api = request(app);

    app.get('/', function(req, res){
      return res.end();
    });

    expect(app).to.have.ownProperty('use');

    request(app)
      .get('/')
      .expect(200)
      .expect('x-powered-by', false)
      .end(function(err, res) {
        if (err) throw err;
      });

  });
});
