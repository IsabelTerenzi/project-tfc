import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

const teamList = [
  {
    id: 1,
    teamName: "Avaí/Kindermann"
  },
  {
    id: 2,
    teamName: "Bahia"
  },
  {
    id: 3,
    teamName: "Botafogo"
  },
  {
    id: 4,
    teamName: "Corinthians"
  },
  {
    id: 5,
    teamName: "Cruzeiro"
  },
  {
    id: 6,
    teamName: "Ferroviária"
  },
  {
    id: 7,
    teamName: "Flamengo"
  },
  {
    id: 8,
    teamName: "Grêmio"
  },
  {
    id: 9,
    teamName: "Internacional"
  },
  {
    id: 10,
    teamName: "Minas Brasília"
  },
  {
    id: 11,
    teamName: "Napoli-SC"
  },
  {
    id: 12,
    teamName: "Palmeiras"
  },
  {
    id: 13,
    teamName: "Real Brasília"
  },
  {
    id: 14,
    teamName: "Santos"
  },
  {
    id: 15,
    teamName: "São José-SP"
  },
  {
    id: 16,
    teamName: "São Paulo"
  }
]

describe('Testes de Teams', () => {

   it('Testa se a rota /teams retorna status 200 e os times listados', async () => {
    const teams = await chai.request(app).get('/teams');
     expect(teams.status).to.be.equal(200);
     expect(teams.body).to.be.deep.equal(teamList);
   });

   it('Testa se é possível buscar um time pelo seu id', async () => {
    const team = await chai.request(app).get('/teams/1');
    expect(team.status).to.be.equal(200);
    expect(team.body).to.be.deep.equal(teamList[0])
   })

});