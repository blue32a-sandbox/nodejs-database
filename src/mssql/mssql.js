const mssql = require('mssql');
const config = {
  user: process.env.MSSQL_USRE,
  password: process.env.MSSQL_PASSWORD,
  database: "Sample",
  server: process.env.MSSQL_HOST,
  options: {
    useUTC: true,
    trustServerCertificate: true
  }
};

mssql.on('error', err => {
  console.error('error', err);
});

mssql.connect(config).then(pool => {
  const sql = "SELECT * FROM Member WHERE CreatedAt <= @created_at";
  return pool.request()
    .input('created_at', mssql.DateTime, new Date('2023-03-11 00:00:00'))
    .query(sql);
}).then(result => {
  console.log('result', result);
}).catch(err => {
  console.error('error', err);
});
