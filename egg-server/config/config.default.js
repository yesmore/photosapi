/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path')

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1631350599997_6975';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  /** My plug-in configuration */
  // Disable CSRF
  config.security = {
    csrf: {
      enable: false
    }
  }

  // Enable CORS
  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH'
  }

  // Configuring the rendering engine
  config.view = {
    defaultViewEngine: 'nunjucks'
  }

  // Configuring the jwt secret
  config.jwt = {
    secret: 'sf65saf9w8a46safa54fasdhrtjy156sd4va1s66s7af9'
  }

  // Connect your db(MySQL)
  config.sequelize = {
    dialect: 'mysql',
    database: 'photo',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123',
    timezone: '+8:00',
  }

  // Configure access path
  config.static = {
    prefix: '/', // Access path
    dir: path.join(appInfo.baseDir, 'app/public') // Set static file directory
  }

  config.proxy = true

  return {
    ...config,
    ...userConfig,
  };
};
