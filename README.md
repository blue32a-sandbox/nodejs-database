# nodejs-database

## DBMS

### SQL Server

#### `sqlcmd`で接続する

```sh
docker compose exec <service name> /opt/mssql-tools/bin/sqlcmd -U sa -P <passsword>
```

#### `sqlcmd`でのSQL実行

SQLの後に`go`

```
SELECT CURRENT_TIMESTAMP;
go
```
#### SQL example

```sql
SELECT name FROM sys.databases;
```

```sql
SELECT name FROM sys.objects WHERE type_desc = 'USER_TABLE';
```

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
    Height    DECIMAL(4, 1) NULL,
    CreatedAt DATETIME NOT NULL
);
```

```sql
INSERT INTO Member(Name, Birthday, Age, Height, CreatedAt) VALUES ('山田太郎', '1985-10-03', 37, 175.3, '2023-03-10 15:00:00');
INSERT INTO Member(Name, Birthday, Age, Height, CreatedAt) VALUES ('高橋花子', '1984-03-10', 38, NULL, '2023-03-11 15:00:00');
```
