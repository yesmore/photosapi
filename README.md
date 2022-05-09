# 小舍图片Api接口（已关闭）

> 此版本接口已关闭，请使用 [v2](https://github.com/yesmore/photosapi) 版本


### 调用方法

地址：`http://api.aoau.top`

方法：`GET`

| url         | 参数 | 值     | 必须 |
| ----------- | ---- | ------ | ---- |
| /photos/api | page | number | 是   |


### ajax请求示例

```js
async fetchPhotos() {
    const res = await this.$http.get('http://api.aoau.top/photos/api?page=9')
    console.log(res)
},
```

示例url：`http://api.aoau.top/photos/api?page=9`

返回值：

```js
res:{
    "status": 200,
    "msg": {
        "photoNum": 100,
        "category": "写真4",
        "author": "收集不易，请珍惜接口，更多资源请访问Github:https://github.com/bai-23/photosapi",
        "photoList": [
            xxx.jpg
            ...
        ],
        "tips": "部分图片较大，加载速度较慢，请谅解。图片来源于互联网，仅供个人使用，请勿商用！"
    }
}

```

> 注：参数page范围为：1~14。
>
> （每条线路存储100张图片，建议线路5~14）

---
下面是测试，其他线路请自行尝试
[线路1](http://api.aoau.top:9999/photos/1/%20%2816%29.png)
[线路2](http://api.aoau.top:9999/photos/2/%20%2819%29.png)
[线路3](http://api.aoau.top:9999/photos/3/%20%2834%29.png)
[线路4](http://api.aoau.top:9999/photos/4/%20%2883%29.png)
[线路8](http://api.aoau.top:9999/photos/8/%20%2830%29.jpg)
[线路14](http://api.aoau.top:9999/photos/14/%20%2860%29.jpg)

