const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('VibeSync', 'root', 'password', {
    host: 'db',
    dialect: 'mysql'
});


  

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectDB };