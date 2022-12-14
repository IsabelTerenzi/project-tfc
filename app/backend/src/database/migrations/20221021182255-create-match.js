'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      homeTeam: {
        allowNull: false,
        foreignKey: true,
        field: 'home_team',
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id'
        }
      },

      homeTeamGoals: {
        allowNull: false,
        field: 'home_team_goals',
        type: Sequelize.INTEGER
      },

      awayTeam: {
        allowNull: false,
        field: 'away_team',
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id'
        }
      },

      awayTeamGoals: {
        allowNull: false,
        field: 'away_team_goals',
        type: Sequelize.INTEGER
      },

      inProgress: {
        allowNull: false,
        field: 'in_progress',
        type: Sequelize.BOOLEAN
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
}