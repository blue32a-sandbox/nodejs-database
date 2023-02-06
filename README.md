# nodejs-database

## DBMS

### SQL Server

#### `sqlcmd`で接続する

```sh
docker compose exec <service name> /opt/mssql-tools/bin/sqlcmd -U sa -P <passsword>
```

#### データベース一覧

```
select name from sys.databases;
go
```
