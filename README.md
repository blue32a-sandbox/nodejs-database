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
#### SQL example

```sql
CREATE DATABASE Sample;
```

```sql
USE Sample;
```

```sql
CREATE TABLE Member(
    ID        INT NOT NULL IDENTITY(1, 1) PRIMARY KEY,
    Name      NVARCHAR(20) NOT NULL,
    Birthday  DATE NOT NULL,
    Age       TINYINT NOT NULL,
    Height    DECIMAL(4, 1) NULL
);
```

```sql
INSERT INTO Member(Name, Birthday, Age, Height) VALUES ('山田太郎', '1985-10-03', 37, 175.3);
INSERT INTO Member(Name, Birthday, Age, Height) VALUES ('高橋花子', '1984-03-10', 36, NULL);
```
