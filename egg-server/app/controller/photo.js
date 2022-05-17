'use strict';

const Controller = require('egg').Controller;

class PhotoController extends Controller {
  async index() {
    const { ctx } = this;
    let ips, totalCall = 0;
    const baseUrl = 'https://fastly.jsdelivr.net/gh/yesmore/img/v2/';
    let photoList = [];
    let { query, ip } = ctx.request;

    if (query.p === undefined) {
      ctx.body = {
        msg: 'please add <page> params',
        status: 401
      }
    } else {
      try {
        for (let i = 1; i < 101; i++) {
          if (i < 10) {
            photoList.push(baseUrl+query.p+'/0'+i+'.jpg')
          } else {
            photoList.push(baseUrl+query.p+'/'+i+'.jpg')
          }
        }

        let doIp = await ctx.service.photo.getIp(ip);
        ips = await ctx.service.photo.getIp();
        if(doIp.length === 0) {
          await ctx.service.photo.createIp(ip);
        } else {
          //  Add count
          let count = doIp[0] ? doIp[0].dataValues.count : 0;
          await ctx.service.photo.updateCount(ip,++count);
        }
        if (ips.length !== 0) {
          for (let i = 0; i < ips.length; i++) {
            totalCall += parseInt(ips[i].dataValues.count);
          }
        }
        ctx.body = {
          msg: 'Github：https://github.com/yesmore/photosapi',
          currentPage: query.p,
          photoNum: photoList.length,
          totalUsers: ips ? ips.length : 0,
          totalCall: totalCall,
          uip: ip,
          photoList: photoList,
          info: '图片来源于网络，仅供个人娱乐。'
        }
      } catch (e) {
        ctx.body = {
          msg: 'erver error',
          status: 501
        }
      }
    }
  }
}

module.exports = PhotoController;
