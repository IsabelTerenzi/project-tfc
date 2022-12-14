import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

const matchList = [
  {
    "id": 1,
    "homeTeam": 16,
    "awayTeam": 8,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "awayTeam": 14,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Internacional"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeam": 4,
    "awayTeam": 11,
    "homeTeamGoals": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Corinthians"
    },
    "teamAway": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 4,
    "homeTeam": 3,
    "awayTeam": 2,
    "homeTeamGoals": 0,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Botafogo"
    },
    "teamAway": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 5,
    "homeTeam": 7,
    "awayTeam": 10,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Flamengo"
    },
    "teamAway": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 6,
    "homeTeam": 5,
    "awayTeam": 13,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 7,
    "homeTeam": 12,
    "awayTeam": 6,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 8,
    "homeTeam": 15,
    "awayTeam": 1,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São José-SP"
    },
    "teamAway": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 9,
    "homeTeam": 1,
    "awayTeam": 12,
    "homeTeamGoals": 0,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 10,
    "homeTeam": 2,
    "awayTeam": 9,
    "homeTeamGoals": 0,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Bahia"
    },
    "teamAway": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 11,
    "homeTeam": 13,
    "awayTeam": 3,
    "homeTeamGoals": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 12,
    "homeTeam": 6,
    "awayTeam": 4,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 13,
    "homeTeam": 8,
    "awayTeam": 5,
    "homeTeamGoals": 2,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Grêmio"
    },
    "teamAway": {
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 14,
    "homeTeam": 14,
    "awayTeam": 16,
    "homeTeamGoals": 2,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Santos"
    },
    "teamAway": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 15,
    "homeTeam": 10,
    "awayTeam": 15,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Minas Brasília"
    },
    "teamAway": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 16,
    "homeTeam": 11,
    "awayTeam": 7,
    "homeTeamGoals": 0,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "teamName": "Flamengo"
    }
  },
  {
    "id": 17,
    "homeTeam": 1,
    "awayTeam": 8,
    "homeTeamGoals": 2,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 18,
    "homeTeam": 12,
    "awayTeam": 5,
    "homeTeamGoals": 4,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 19,
    "homeTeam": 11,
    "awayTeam": 2,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 20,
    "homeTeam": 7,
    "awayTeam": 9,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Flamengo"
    },
    "teamAway": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 21,
    "homeTeam": 6,
    "awayTeam": 13,
    "homeTeamGoals": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 22,
    "homeTeam": 4,
    "awayTeam": 3,
    "homeTeamGoals": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Corinthians"
    },
    "teamAway": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 23,
    "homeTeam": 15,
    "awayTeam": 16,
    "homeTeamGoals": 2,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "teamName": "São José-SP"
    },
    "teamAway": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 24,
    "homeTeam": 10,
    "awayTeam": 14,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Minas Brasília"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 25,
    "homeTeam": 2,
    "awayTeam": 6,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Bahia"
    },
    "teamAway": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 26,
    "homeTeam": 13,
    "awayTeam": 1,
    "homeTeamGoals": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 27,
    "homeTeam": 5,
    "awayTeam": 15,
    "homeTeamGoals": 1,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 28,
    "homeTeam": 16,
    "awayTeam": 7,
    "homeTeamGoals": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Flamengo"
    }
  },
  {
    "id": 29,
    "homeTeam": 9,
    "awayTeam": 4,
    "homeTeamGoals": 0,
    "awayTeamGoals": 4,
    "inProgress": false,
    "teamHome": {
      "teamName": "Internacional"
    },
    "teamAway": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 30,
    "homeTeam": 3,
    "awayTeam": 12,
    "homeTeamGoals": 0,
    "awayTeamGoals": 4,
    "inProgress": false,
    "teamHome": {
      "teamName": "Botafogo"
    },
    "teamAway": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 31,
    "homeTeam": 8,
    "awayTeam": 10,
    "homeTeamGoals": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Grêmio"
    },
    "teamAway": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 32,
    "homeTeam": 14,
    "awayTeam": 11,
    "homeTeamGoals": 5,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Santos"
    },
    "teamAway": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 33,
    "homeTeam": 1,
    "awayTeam": 16,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 34,
    "homeTeam": 9,
    "awayTeam": 6,
    "homeTeamGoals": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Internacional"
    },
    "teamAway": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 35,
    "homeTeam": 10,
    "awayTeam": 5,
    "homeTeamGoals": 1,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "teamName": "Minas Brasília"
    },
    "teamAway": {
      "teamName": "Cruzeiro"
    }
  },
  {
    "id": 36,
    "homeTeam": 2,
    "awayTeam": 7,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Bahia"
    },
    "teamAway": {
      "teamName": "Flamengo"
    }
  },
  {
    "id": 37,
    "homeTeam": 15,
    "awayTeam": 13,
    "homeTeamGoals": 0,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São José-SP"
    },
    "teamAway": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 38,
    "homeTeam": 14,
    "awayTeam": 4,
    "homeTeamGoals": 2,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Santos"
    },
    "teamAway": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 39,
    "homeTeam": 3,
    "awayTeam": 11,
    "homeTeamGoals": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Botafogo"
    },
    "teamAway": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 40,
    "homeTeam": 12,
    "awayTeam": 8,
    "homeTeamGoals": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 41,
    "homeTeam": 16,
    "awayTeam": 9,
    "homeTeamGoals": 2,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeam": 6,
    "awayTeam": 1,
    "homeTeamGoals": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 43,
    "homeTeam": 11,
    "awayTeam": 10,
    "homeTeamGoals": 0,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 44,
    "homeTeam": 7,
    "awayTeam": 15,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "teamName": "Flamengo"
    },
    "teamAway": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 45,
    "homeTeam": 5,
    "awayTeam": 3,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 46,
    "homeTeam": 4,
    "awayTeam": 12,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Corinthians"
    },
    "teamAway": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 47,
    "homeTeam": 8,
    "awayTeam": 14,
    "homeTeamGoals": 1,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "teamName": "Grêmio"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 48,
    "homeTeam": 13,
    "awayTeam": 2,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "teamName": "Bahia"
    }
  }
]

const matchesInProgress = [
  {
    "id": 41,
    "homeTeam": 16,
    "awayTeam": 9,
    "homeTeamGoals": 2,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeam": 6,
    "awayTeam": 1,
    "homeTeamGoals": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 43,
    "homeTeam": 11,
    "awayTeam": 10,
    "homeTeamGoals": 0,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 44,
    "homeTeam": 7,
    "awayTeam": 15,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "teamName": "Flamengo"
    },
    "teamAway": {
      "teamName": "São José-SP"
    }
  },
  {
    "id": 45,
    "homeTeam": 5,
    "awayTeam": 3,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "teamName": "Botafogo"
    }
  },
  {
    "id": 46,
    "homeTeam": 4,
    "awayTeam": 12,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Corinthians"
    },
    "teamAway": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 47,
    "homeTeam": 8,
    "awayTeam": 14,
    "homeTeamGoals": 1,
    "awayTeamGoals": 2,
    "inProgress": true,
    "teamHome": {
      "teamName": "Grêmio"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 48,
    "homeTeam": 13,
    "awayTeam": 2,
    "homeTeamGoals": 1,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "teamName": "Real Brasília"
    },
    "teamAway": {
      "teamName": "Bahia"
    }
  }
]

const createMatch = {
  "homeTeam": 16,
  "awayTeam": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
}

const createMatchEqualTeams = {
  "homeTeam": 16,
  "awayTeam": 16,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
}

const createMatchWrongId = {
  "homeTeam": 200,
  "awayTeam": 16,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
}

const matchCreated = {
  "id": 51,
  "homeTeam": 16,
  "awayTeam": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
  "inProgress": true
}

const userLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

const tokenInvalid = 'invalidtoken123456'

describe('Testes de Matches', () => {

   it('Testa se a rota /matches retorna status 200 e as partidas listadas', async () => {
    const matches = await chai.request(app).get('/matches');
     expect(matches.status).to.be.equal(200);
     expect(matches.body).to.be.deep.equal(matchList);
   });

   it('Testa se é possível buscar uma partida pelo seu progresso', async () => {
    const matches = await chai.request(app).get('/matches?inProgress=true');
    expect(matches.status).to.be.equal(200);
    expect(matches.body).to.be.deep.equal(matchesInProgress);
   })

   it('Testa se é possível criar uma partida', async () => {
    const login = await chai.request(app).post('/login').send(userLogin); 
    const token = login.body.token;
    const match = await chai.request(app).post('/matches').send(createMatch)
    .set('authorization', token);
    expect(match.status).to.be.equal(201);
    expect(match.body).to.have.property('id');
    expect(match.body).to.have.property('inProgress');
   })

   it('Testa se não é possível criar uma partida de um time com id inexistente', async () => {
    const login = await chai.request(app).post('/login').send(userLogin); 
    const token = login.body.token;
    const match = await chai.request(app).post('/matches').send(createMatchWrongId)
    .set('authorization', token);
    expect(match.status).to.be.equal(404);
    expect(match.body).to.be.deep.equal({ message: 'There is no team with such id!' });
   })

   it('Testa se não é possível criar uma partida com times iguais', async () => {
    const login = await chai.request(app).post('/login').send(userLogin); 
    const token = login.body.token;
    const match = await chai.request(app).post('/matches').send(createMatchEqualTeams)
    .set('authorization', token);
    expect(match.status).to.be.equal(422);
    expect(match.body).to.be.deep.equal({ message: 'It is not possible to create a match with two equal teams' });
   })
   
   it('Testa se é possível finalizar uma partida', async () => {
    const match = await chai.request(app).patch('/matches/1/finish');
    expect(match.status).to.be.equal(200);
    expect(match.body).to.have.property('message');
   })

   it('Testa se é possível atualizar uma partida', async () => {
    const match = await chai.request(app).patch('/matches/1');
    expect(match.status).to.be.equal(200);
    expect(match.body).to.be.deep.equal({ message: 'Updated' });
   })

   it('Testa o envio sem authorization', async () => {
    await chai.request(app).post('/login').send(userLogin); 
    const match = await chai.request(app).post('/matches').send(createMatch);
    expect(match.status).to.be.equal(401);
    expect(match.body).to.be.deep.equal({ message: "User unauthorized" })
   })

   it('Testa o envio de um token inválido', async () => {
    const login = await chai.request(app).post('/login').send(userLogin); 
    const match = await chai.request(app).post('/matches').send(createMatch)
    .set('authorization', tokenInvalid);
    expect(match.status).to.be.equal(401);
    expect(match.body).to.be.deep.equal({ message: "Token must be a valid token" })
   })
});