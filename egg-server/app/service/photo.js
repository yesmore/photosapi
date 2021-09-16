const Service = require('egg').Service;

class PhotoService extends Service {

  async createIp(uip) {
    let { app } = this;
    try {
      await app.model.Photo.create({
        uip,
        count: '1'
      })
      return true;
    } catch (e) {
      return false;
    }
  }

  async getIp(uip) {
    let { app } = this;
    let ip

    try {
      if (uip) {
        ip = await app.model.Photo.findAll({
          where: { uip }
        })
      } else {
        ip = await app.model.Photo.findAll()
      }
      return ip;
    } catch (e) {
      return null
    }
  }

  async updateCount(uip, count) {
    let { app } = this;
    try {
      let res = await app.model.Photo.update(
        { count },
        {
          // Query criteria: if param isn't eq ''
          where: { uip }
        }
      )
      return res;
    } catch (e) {
      return false;
    }
  }
}

module.exports = PhotoService;
