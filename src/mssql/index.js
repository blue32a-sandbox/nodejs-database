const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = {
  server: process.env.MSSQL_HOST,
  options: {
    database: "Sample",
    trustServerCertificate: true
  },
  authentication: {
    type: "default",
    options: {
      userName: process.env.MSSQL_USRE,
      password: process.env.MSSQL_PASSWORD
    }
  }
};

const connection = new Connection(config);

connection.on('connect', function(err) {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('connect success');
    executeStatement(connection);
  }
});

connection.on('end', function() {
  console.log('connect end');
});

connection.connect();

function executeStatement(connection) {
  const request = new Request("SELECT * FROM Member", function(err, rowCount, columns) {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + ' rows');
      // and we close the connection
      connection.close();
    }
  });

  request.on('row', function(columns) {
    columns.forEach(function(column) {
      console.log(`${column.metadata.colName}: ${column.value}`);
    });
  });

  request.on('done', function() {
    console.log('done');
  });

  request.on('doneInProc', function() {
    console.log('doneInProc');
  });

  request.on('doneProc', function() {
    console.log('doneProc');
  });

  connection.execSql(request);
}
