/**
 * User Service - CRUD
 *  ask for db
 */
const Service = require('egg').Service;
const crypto = require('crypto');

class UserService extends Service {
  async getUserById(id) {
    let { app } = this;
    let userList
    try {
      if(id) {
        userList = await app.model.User.findAll({
          // Query criteria: if param isn't eq ''
          where: { id }
        })
      } else {
        userList = await app.model.User.findAll()
      }
      return userList;
    } catch (e) {
      return null
    }
  }

  async getUserByName(username) {
    let { app } = this;
    try {
      let user = await app.model.User.findAll({
        where: { username }
      })
      return user[0].dataValues;
    } catch (e) {
      return null
    }
  }

  async createUser(username, password, group_id) {
    let { app,ctx } = this;
    password = ctx.service.user.getMd5Data(password);
    try {
      await app.model.User.create({
        username,
        password,
        group_id
      })
      return true;
    } catch (e) {
      return false;
    } 
  }

  async deleteUser(id) {
    let { app } = this;
    try {
      let res = await app.model.User.destroy({
        // Query criteria: if param isn't eq ''
        where: { id }
      })
      return res;
    } catch (e) {
      return false;
    }
  } 

  async updateUser(id, newName) {
    let { app } = this;
    try {
      let res = await app.model.User.update(
        { username: newName },
        {
          // Query criteria: if param isn't eq ''
          where: { id }
        }
      )
      return res;
    } catch (e) {
      return false;
    }
  }

  // md5 encryption
  getMd5Data(pwd) {
    return crypto.createHash('md5').update(pwd).digest('hex');
  }
}

module.exports = UserService;
