# Projeto Trybe Futebol Clube

O TFC é um site informativo sobre partidas e classificações de futebol.

Nesse projeto, foi desenvolvida uma API (utilizando o método TDD) e também foi integrada - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Foi construído um back-end dockerizado utilizando modelagem de dados através do Sequelize. O desenvolvimento seguia regras de negócio providas no projeto e a API é consumida por um front-end já provido nesse projeto.

Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. Existe um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas.

O back-end implementa regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

# Ferramentas e Habilidades Utilizadas

- MySQL;
- Docker;
- Sequelize;
- Express;
- Node.js;
- TypeScript;
- JWT;
- Testes E2E;
- Arquitetura de software;
