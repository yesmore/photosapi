# egg-server

a server built by egg. 

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org



### other

if u want create an egg project by yourself，please do：

```bash
# install egg-cli
$ npm i egg-init -g
# init Project
$ egg-init your-egg-demo --type=simple

$ cd your-egg-demo
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

