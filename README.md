<div align=center>
    <h1>小舍图片Api接口 v2</h1>
    <img src="https://img.shields.io/github/stars/yesmore/photosapi.svg" alt="star"/>
    <img src="https://img.shields.io/github/package-json/v/yesmore/photosapi" alt="star"/>
     <img src="https://img.shields.io/github/license/yesmore/photosapi" alt="star"/>
</div>


---



>截止已更新：参数 **p** 范围为：1~14（1400张）。
>
>
>
>如果喜欢请给仓库点个star：https://github.com/yesmore/photosapi
>
>此接口为 [小舍图片Api接口](https://github.com/yesmore/photosapi/tree/v1.0.0) 重构版，新增：
>
>- **CDN** 加速
>- 接口调用统计功能
>
>注意：**个人接口，请勿商用。图片收集不易，请珍惜食用。**



## 用户使用须知

### 调用方法

地址：`http://v2.aoau.top`

方法：`GET`

| url  | 参数 | 值     | 必须 |
| ---- | ---- | ------ | ---- |
| /pb  | p    | number | 是   |


### ajax请求示例

```js
async fetchPhotos() {
    const res = await this.$http.get('http://v2.aoau.top/pb?p=3')
    console.log(res)
},
```

示例url：`http://v2.aoau.top/pb?p=3`

返回值：

```js
res:{
	"msg": "Github：https://github.com/yesmore/photosapi",
	"currentPage": "3",
	"photoNum": 100,
	"totalUsers": 3,
	"totalCall": 49,
	"uip": "127.0.0.1",
	"photoList": [
		"https://cdn.jsdelivr.net/gh/yesmore/img/v2/3/01.jpg",
		...
	],
	"info": "图片来源于网络，仅供个人娱乐。"
}

```

下面是测试，其他线路请自行尝试
[线路1](https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/01.jpg)
[线路2](https://cdn.jsdelivr.net/gh/yesmore/img/v2/2/01.jpg)
[线路3](https://cdn.jsdelivr.net/gh/yesmore/img/v2/3/01.jpg)
[线路4](https://cdn.jsdelivr.net/gh/yesmore/img/v2/4/01.jpg)
[线路8](https://cdn.jsdelivr.net/gh/yesmore/img/v2/8/01.jpg)
[线路14](https://cdn.jsdelivr.net/gh/yesmore/img/v2/14/01.jpg)

---

## 开发者须知

如果你想基于本项目开发，可以参考以下意见：

- 使用 **PicGo**+**Github**+**jsdelive**r(CDN) 存储你的图片
- 使用 **[vuEgg-jwt-template](https://github.com/yesmore/vue-egg-jwt-template)** 中的 **egg-server** 管理作为你的 <u>Api</u> 服务器
- 或者直接`fork`本项目进行二次开发

**关于 PicGo**：

访问这里 [了解]()。

**关于 vuEgg-jwt-template**：

vuEgg-jwt-template 是本人的另一个开源项目，基于 Vue、Eggjs、Jwt 实现的开箱即用的用户鉴权模板，使开发人员专注于核心逻辑编写，了解 [详情](https://github.com/yesmore/vue-egg-jwt-template)。

**关于 CDN 加速**：

访问了解 [详情](https://www.jsdelivr.com/?docs=gh)。

### 快速开始

开始之前，请确保你有以下环境：

- Nodejs
- Npm（Nodejs自带）
- MySQL 5.7.x

#### Clone git repo

```bash
# git bash
$ git clone git@github.com:yesmore/photosapi.git
# or http
$ git clone https://github.com/yesmore/photosapi.git
```

#### Install & Start

```bash
$ cd egg-server
$ npm i
# Start 
$ npm run dev
```

#### 文件目录

```js
|- egg-server/
	|- app/
		|- controller/
		|- middleware/
		|- model/
		|- service/
		|- view/
		|- router.js
	|- config/
		|- config.default.js
		|- plugin.js
	|- test/
	|- app.js
	|- package.json
	|- ...
```



## License

MIT
