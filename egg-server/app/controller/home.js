'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      msg: 'Correct URL: http://v2.aoau.top/pb?p=pageNum',
      status: 400
    };
  }

  // init adminUser & adminGroup
  async initAdmin() {
    const { ctx } = this;
    let initGroup, initUser
    try {
      // init group
      let doGroup = await ctx.service.group.getGroupByName('admin')
      if (!doGroup) {
        initGroup = await ctx.service.group.createGroup('admin')
      }

      // init user
      let doUser = await ctx.service.user.getUserByName('admin');
      if(!doUser) {
        let res = await ctx.service.group.getGroupByName('admin')
        initUser = await ctx.service.user.createUser('admin', 'admin', res.id)
      }

      if (initUser && initGroup) {
        ctx.body = {
          msg: 'Init Admin successfully.',
          status: 200
        }
      } else if (initUser && (initGroup === undefined)) {
        ctx.body = {
          msg: 'Init AdminUser successfully.',
          status: 201
        }
      } else if (initGroup && (initUser === undefined)) {
        ctx.body = {
          msg: 'Init AdminGroup successfully.',
          status: 201
        }
      } else {
        ctx.body = {
          msg: 'Admin exists.',
          status: 400
        }
      }
    } catch (error) {
      ctx.body = {
        msg: 'Server error',
        status: 501
      }
    }
  }
}

module.exports = HomeController;
