# 小舍图片Api接口

>项目名称：小舍图片Api接口
>
>开发人员：熙子黒
>
>开源协议：MIT
>
>感谢你的使用，如果喜欢请给仓库点个star：https://github.com/bai-23/photosapi
>
>此接口已接入本人项目(小舍社交app)，请放心食用：https://github.com/bai-23/italk-uniapp
>
>注意：**个人接口，请勿商用。图片收集不易，请珍惜食用。部分图片较大加载缓慢，请耐心等待。**



### 调用方法

地址：`http://api.aoau.top`

方法：`GET`

| url         | 参数 | 值             | 必须 |
| ----------- | ---- | -------------- | ---- |
| /photos/api | page | number（0~14） | 是   |



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

> 注：参数page范围为：0~14，请填写正确。
>
> （建议参数5~14）
