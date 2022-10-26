import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/UserModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const userLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

const userLoginFail = {
  email: '',
  password: '',
}

const userLoginFalse = {
  email: 'bel@teste.com',
  password: 'belteste',
}

const userLoginWrongPassword = {
  email: 'admin@admin.com',
  password: 'belteste',
}

describe('Testes de Login', () => {
 // let chaiHttpResponse: Response;

   it('Testa se o login retorna status 200 e um token', async () => {
    const login = await chai.request(app).post('/login').send(userLogin);
     expect(login.status).to.be.equal(200);
     expect(login.body).to.have.property('token');
   });

   it('Testa se o login falha ao enviar com campo de email e senha vazios', async () => {
    const login = await chai.request(app).post('/login').send(userLoginFail);
    expect(login.status).to.be.equal(400);
    expect(login.body).not.to.have.property('token');
    expect(login.body).to.be.deep.equal({ message: 'All fields must be filled' });
   })

   it('Testa se o login falha ao enviar um usuário não existente', async () => {
    const login = await chai.request(app).post('/login').send(userLoginFalse);
    expect(login.status).to.be.equal(401);
    expect(login.body).not.to.have.property('token');
    expect(login.body).to.be.deep.equal({ message: 'Incorrect email or password' });
   })

   it('Testa se o login falha ao enviar uma senha errada', async () => {
    const login = await chai.request(app).post('/login').send(userLoginWrongPassword);
    expect(login.status).to.be.equal(401);
    expect(login.body).not.to.have.property('token');
    expect(login.body).to.be.deep.equal({ message: 'Incorrect email or password' });
   })

   it('Testa se é possível ver o role de um usuário', async () => {
    const login = await chai.request(app).post('/login').send(userLogin); 
    const token = login.body.token;
    const role = await chai.request(app).get('/login/validate')
    .set('authorization', token);
    expect(role.status).to.be.equal(200);
    expect(role.body).to.be.deep.equal({ "role": "admin" });
   })
});
