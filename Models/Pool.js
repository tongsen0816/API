let config = require('../Configs/index');
let Promise = require('bluebird');
let mysql = Promise.promisifyAll(require('mysql'));


var pool = mysql.createPool({
  connectionLimit: 10,
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  charset: 'utf8mb4'
})
pool.on('acquire', function (connection) {
  // console.log('Connection %d acquired', connection.threadId);
});
pool.on('connection', function (connection) {
  connection.query('SET SESSION auto_increment_increment=1')
});
pool.on('enqueue', function () {
  console.log('Waiting for available connection slot');
});
pool.on('release', function (connection) {
  // console.log('Connection %d released', connection.threadId);
});

module.exports = Promise.promisifyAll(pool);