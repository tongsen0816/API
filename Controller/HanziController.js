const ResConstant = require('../Tools/ResConstant');
const HanziModel = require('../Models/HanziModel');
class HanziController {
    async getInfo(ctx) {
        let hanzi = ctx.httpValidate.body('hanzi').notEmpty().isString().end();
        if (ctx.httpValidate.error()) {
            throw new Error(ResConstant.CODE_ARGS_NOT_MATCH.key);
        }
        let info = await HanziModel.getInfo(hanzi)
        ctx.returnValue(ResConstant.CODE_SUCCESS.key, {
            info: info
        });
    }

}

module.exports = new HanziController();