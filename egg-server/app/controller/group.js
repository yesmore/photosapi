'use strict';
/**
 * Group Controller
 *  ask for groupService
 */
const Controller = require('egg').Controller;

class GroupController extends Controller {
  /**
   * The http-Url please refer to user's controller. (app/controller/user.js)
   *  http请求Url请参考用户的控制器.
   */

  // method: Get
  async index() {
    let { ctx } = this;
    try {
      // Receive param from the front-end
      let { id } = ctx.request.query;
      let GroupList = await ctx.service.group.getGroupById(id);
      if(GroupList.length !== 0) {
        ctx.body = {
          msg: 'Group fetch successfully.',
          status: 200,
          data: GroupList,
          len: GroupList.length
        }
      } else {
        ctx.body = {
          msg: 'Group search failed',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: 'erver error',
        status: 501
      }
    }
  }

  // method: Post
  async create() {
    let { ctx } = this;
    try {
      let groupname = ctx.request.body.groupname;
      let doGroup = await ctx.service.group.getGroupByName(groupname);

      if(!doGroup) {
        let res = await ctx.service.group.createGroup(groupname)
        if(res) {
          ctx.body = {
            msg: 'Group created successfully.',
            status: 200
          }
        } else {
          ctx.body = {
            msg: 'Group created failed',
            status: 402
          }
        }
      } else {
        ctx.body = {
          msg: 'Group already exists.',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: 'erver error',
        status: 501
      }
    }
  }

  // method: Delete
  async destroy() {
    let { ctx } = this;
    try {
      let id = ctx.params.id;
      let res = await ctx.service.group.deleteGroup(id);
      if(res === 1) {
        ctx.body = {
          msg: 'Group destroy successfully.',
          status: 200
        }
      } else {
        ctx.body = {
          msg: 'Group destroy failed',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: 'erver error',
        status: 501
      }
    }
  }

  // method: Put
  async update() {
    let { ctx } = this;
    try {
      let id = ctx.params.id;
      let newName = ctx.request.body.groupname;
      let res = await ctx.service.group.updateGroup(id, newName);
      if(res[0] === 1) {
        ctx.body = {
          msg: 'Group update successfully.',
          status: 200
        }
      } else {
        ctx.body = {
          msg: 'Group update failed',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: 'erver error',
        status: 501
      }
    }
  }
}

module.exports = GroupController;
