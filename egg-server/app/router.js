'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/init', controller.home.initAdmin);
  router.get('/pb', controller.photo.index);

  // Interface - Submit Login form
  router.post('/jwtlogin', controller.jwt.doLogin);
  // Interface - Submit Register form
  router.post('/jwtregister', controller.jwt.doRegister);
  // router.get('/jwtmsg', app.middleware.checktoken(), controller.jwt.getMsg)

  router.resources('user', '/user', controller.user)
  router.resources('group', '/group', controller.group)
};
