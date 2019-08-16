
class ToolTime {
    static getTimestamp() {
      return ~~(new Date().getTime() / 1000);
    }
    static getTodayTimestamp() {
      let date= new Date();
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      return ~~(date.getTime() / 1000);
    }
    //分钟转换为时间戳
    static min2timstamp(min) {
      return min * 60
    }
  }
  
  module.exports = ToolTime;