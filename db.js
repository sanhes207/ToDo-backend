const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: '19022001',
  host: 'localhost',
  port: 5432,
  database: 'todo_list'
});

module.exports = pool;
