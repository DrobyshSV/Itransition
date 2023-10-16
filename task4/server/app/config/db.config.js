module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123123123",
  DB: "drobyshdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
