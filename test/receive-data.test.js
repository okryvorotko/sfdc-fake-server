const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const superagent = require('superagent');
require('./base.test');

describe('Mock SFDC Server', () => {
    it('@todo should retrieve a list of accounts', async function () {
        const res = await superagent.get('http://localhost:3000/api/sfdc/accounts');
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array', `Response: ${res.body}`);
        expect(res.body).to.have.lengthOf(3, `Result: ${JSON.stringify(res.body)}`);
        expect(res.body[0]).property('id').that.equals(1);
        expect(res.body[0]).property('name').that.equals('Account 1');
        expect(res.body[0]).property('industry').that.equals('Technology');
        expect(res.body[1]).property('id').that.equals(2);
        expect(res.body[1]).property('name').that.equals('Account 2');
        expect(res.body[1]).property('industry').that.equals('Retail');
        expect(res.body[2]).property('id').that.equals(3);
        expect(res.body[2]).property('name').that.equals('Account 3');
        expect(res.body[2]).property('industry').that.equals('Healthcare');
        console.log(res.body);
    });

    it('@todo should retrieve a list of contacts', async function () {
        const res = await superagent.get('http://localhost:3000/api/sfdc/contacts');
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        console.log(res.body);
        expect(res.body).to.have.lengthOf(3);
    });
});
