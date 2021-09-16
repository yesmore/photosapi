'use strict';

const Controller = require('egg').Controller;

class JwtController extends Controller {

  /**
   * Generate:
   *  Receive user-info data from front-end(vue page), like 'username'、'password',
   *  Then check it, if user-info correct, generate a token and return.
   *  从前端（vue页面）接收用户信息数据，如“用户名”、“密码” ,
   *  然后检查它(user-info)，如果用户信息正确，生成一个令牌并返回。
   */
  // method: Post
  // Url: http://127.0.0.1:7001/jwtlogin
  // body: { user:{ username, password } }
  async doLogin() {
    let { ctx } = this;
    try {
      // 1.Get user-info: username & password
      let user = ctx.request.body.user;

      let doUser = await ctx.service.user.getUserByName(user.username);
      // 2.Check for correctness
      let oldPsw = await ctx.service.user.getMd5Data(user.password)
      // Compare the password between web and database
      if(doUser && (oldPsw === doUser.password)) {
        let user_jwt = { 
          username: user.username,
          password: user.password
         };
        // 2.1.Generate token with your user-info & your secret
        let token =  this.app.jwt.sign(user_jwt, this.app.config.jwt.secret);
        ctx.body = {
          token: token,
          status: 200 
        };
      } else {
        // 2.2.or return error
        ctx.body = {
          msg: 'Permission verification error! please input correct username or password.',
          status: 401 
        };
      }
    } catch (e) {
      ctx.body = {
        msg: 'Server error',
        status: 501
      }
    }
  }

  /**
   * Register
   */
  // method: Post
  // Url: http://127.0.0.1:7001/jwtregister
  // body: { user:{ username, password, group_id } }
  async doRegister() {
    let { ctx } = this;
    try {
      // 1.Get user-info: username & password
      let { user } = ctx.request.body;
      let { username, password, group_id } = user
      let doUser = await ctx.service.user.getUserByName(username);
      // 2.Check for correctness
      if(!doUser) {
        let res = await ctx.service.user.createUser(username, password, group_id)
        if(res) {
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
        // 2.2.or return error
        ctx.body = {
          msg: 'User already exists.',
          status: 401 
        };
      }
    } catch (e) {
      ctx.body = {
        msg: 'Server error',
        status: 501
      }
    }
  }

  /**
   * Verify:
   *  Simulate whether to send a request with a token.
   */
  // method: Get
  // Url: http://127.0.0.1:7001/jwtmsg
  async getMsg() {
    let { ctx } = this;
    ctx.body = 'o(*￣︶￣*)o'
  }
}

module.exports = JwtController;
