module.exports = app => {
  const { STRING } = app.Sequelize;
  const Photo = app.model.define('photo', {
    uip: STRING,
    count: STRING
  });

  return Photo
}
