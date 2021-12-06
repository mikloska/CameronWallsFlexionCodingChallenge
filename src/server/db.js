const Pool = require('pg').Pool;

const connectionString = 'postgres://npsgjtuj:wwjyQBo3YZuR09Y4jjDh_E-q20YyzVB_@castor.db.elephantsql.com/npsgjtuj';

const pool = new Pool({
    connectionString
});

module.exports = pool;