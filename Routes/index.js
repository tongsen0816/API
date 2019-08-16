
const HanziController = require('../Controller/HanziController')
module.exports = function (router) {
    //获取当前文字相关信息
  router.post('/hanzi/info', HanziController.getInfo);
}