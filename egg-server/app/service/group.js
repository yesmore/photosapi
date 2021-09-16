/**
 * Group Service - CRUD
 *  ask for db
 */
const Service = require('egg').Service;

class GroupService extends Service {

  async getGroupById(id) {
    let { app } = this;
    let groupList
    try {
      if(id) {
        groupList = await app.model.Group.findAll({
          // Query criteria: if param isn't eq ''
          where: { id }
        })
      } else {
        groupList = await app.model.Group.findAll()
      }
      return groupList
    } catch (e) {
      return null
    }
  }

  async getGroupByName(groupname) {
    let { app } = this;
    try {
      let group = await app.model.Group.findAll({
        where: { groupname }
      })
      return group[0].dataValues;
    } catch (e) {
      return null
    }
  }

  async createGroup(groupname) {
    let { app } = this;
    try {
      await app.model.Group.create({
        groupname
      })
      return true;
    } catch (e) {
      return false;
    }
  } 

  async deleteGroup(id) {
    let { app } = this;
    try {
      let res = await app.model.Group.destroy({
        // Query criteria: if param isn't eq ''
        where: { id }
      })
      return res;
    } catch (e) {
      return false;
    }
  } 

  async updateGroup(id, newName) {
    let { app } = this;
    try {
      let res = await app.model.Group.update(
        { groupname: newName },
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
}

module.exports = GroupService;