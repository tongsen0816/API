let Pool = require('./Pool');
let ToolTime = require('../Tools/ToolTime');
let ResConstant = require('./../Tools/ResConstant');
class HanziModel {
    async getInfo(hanzi) {
        // console.log(word);
        let sql = 'select * from hanzi where word = ?';
        let args = [hanzi]
        let result = await Pool.queryAsync(sql,args)
        console.log(result)
        if (result.affectedRows < 1) {
            throw new Error(ResConstant.CODE_MYSQL_EXEC_ERROR.key);
        } else {
            return result;
        }
    }
}
module.exports = new HanziModel();