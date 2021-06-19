/**
 * 后端路由表
 */

var basePhoto = 'http://api.aoau.top:9999'
const bodyParser = require('body-parser');

module.exports = function (app) {
  let photoList = []

  app.get('/', (req, res)=>{
    res.send({status:400, msg: '请填写正确的参数！'})
  })

  app.get('/photos/api', bodyParser.json(),(req, res) => {
    var category
    var page = req.query.page
    
    
    if (page > 14 || page < 0 || page == undefined) {
      res.send({status:400, msg:'error，参数设置错误'})
    }
      
    var types
    if(page==1 || page==2 || page==3 || page==4) {
      types = '.png'
    } else {
      types = '.jpg'
    }

    for(let i=0; i<=100; i++){
      if (i>0){
        let url = basePhoto + '/photos/'+ page +'/ (' + i + ')' + types
        photoList[i-1] = url
      }
    }

    switch(page) {
      case '1':
        category = '纸片人1'; break;
      case '2':
        category = '纸片人2'; break;
      case '3':
        category = '纸片人3'; break;
      case '4':
        category = '写真1'; break;
      case '5':
        category = '写真2'; break;
      case '6':
        category = '纸片人4'; break;
      case '7':
        category = '写真3'; break;
      case '8':
        category = '纸片人5'; break;
      case '9':
        category = '写真4'; break;
      case '10':
        category = '纸片人6'; break;
      case '11':
        category = '写真5'; break;
      case '12':
        category = '纸片人7'; break;
      case '13':
        category = '纸片人8'; break;
      case '14':
        category = '写真6'; break;
    }

    let data = {
      status: 200,
      msg: {
        photoNum: photoList.length,
        category: category,
        author: '收集不易，请珍惜接口，更多资源请访问Github：https://github.com/bai-23/photosapi',
        photoList,
        tips: '部分图片较大，加载速度较慢，请谅解。图片来源于互联网，仅供个人使用，请勿商用！'
      }
    }
    res.send(data)
  })
}

