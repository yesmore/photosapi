'use strict';
/**
 * User Controller
 *  ask for userService
 */
const Controller = require('egg').Controller;

class UserController extends Controller {
  // method: Get
  // Url: http://127.0.0.1:7001/user[?id=xxx]
  async index() {
    let {
      ctx
    } = this;
    try {
      let {
        id
      } = ctx.request.query;
      let userList = await ctx.service.user.getUserById(id);
      if (userList.length !== 0) {
        ctx.body = {
          msg: 'User fetch successfully.',
          status: 200,
          data: userList,
          len: userList.length
        }
      } else {
        ctx.body = {
          msg: 'User search failed',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: 'Server error',
        status: 501
      }
    }
  }

  // method: Post
  // Url: http://127.0.0.1:7001/user
  // body: { username, password, group_id }
  async create() {
    let {
      ctx
    } = this;
    try {
      // Fetch data from front-end
      let {
        username,
        password,
        group_id
      } = ctx.request.body;
      let doUser = await ctx.service.user.getUserByName(username);
      if (!doUser) {
        let res = await ctx.service.user.createUser(username, password, group_id)
        if (res) {
          ctx.body = {
            msg: 'User created successfully.',
            status: 200
          }
        } else {
          ctx.body = {
            msg: 'User created failed.',
            status: 402
          }
        }
      } else {
        ctx.body = {
          msg: 'User already exists.',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: 'Server error',
        status: 501
      }
    }
  }

  // method: Delete
  // Url: http://127.0.0.1:7001/user/:id
  async destroy() {
    let {
      ctx
    } = this;
    try {
      let id = ctx.params.id;
      let res = await ctx.service.user.deleteUser(id);
      if (res === 1) {
        ctx.body = {
          msg: 'User destroy successfully.',
          status: 200
        }
      } else {
        ctx.body = {
          msg: 'User destroy failed',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: 'Server error',
        status: 501
      }
    }
  }

  // method: Put
  // Url: http://127.0.0.1:7001/user/:id
  // body: { username[, password] }
  async update() {
    let {
      ctx
    } = this;
    try {
      let id = ctx.params.id;
      let newName = ctx.request.body.username;
      let res = await ctx.service.user.updateUser(id, newName);
      if (res[0] === 1) {
        ctx.body = {
          msg: 'User update successfully.',
          status: 200
        }
      } else {
        ctx.body = {
          msg: 'User update failed',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: 'Server error',
        status: 501
      }
    }
  }
}

module.exports = UserController;