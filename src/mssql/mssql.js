const sql = require('mssql');
const config = {
  user: process.env.MSSQL_USRE,
  password: process.env.MSSQL_PASSWORD,
  database: "Sample",
  server: process.env.MSSQL_HOST,
  options: {
    trustServerCertificate: true
  }
};

sql.on('error', err => {
  console.error('error', err);
});

sql.connect(config).then(pool => {
  return pool.request()
    .query("SELECT * FROM Member");
}).then(result => {
  console.dir(result);
}).catch(err => {
  console.error('error', err);
});
