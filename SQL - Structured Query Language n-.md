SQL -> Structured Query Language n-> store data, Retrieve data, Update data and delete data



it is a language to communicate with databases -> a way to talk to store data in tables



without sql , we unable to manage large amount of data



SQL -> perform 4 operations Create, Read, Update and Delete (CRUD) operations



SQL -> language , MySQL -> it is a software (DBMS) to store data physically



**SQL WORK FLOW**



we write query, dbms receives it and inside dbms it would check the syntax and finds the fastest way to execute and runs query



data is fetched from storage and it will be returned



**Relational Databases (SQL-based):**

MySQL

PostgreSQL

Oracle Database

Microsoft SQL Server

SQLite

mariadb



**NoSQL Databases:**

MongoDB (document-based)

Redis (key-value)

Cassandra (wide-column)

dynamo db



SQL -> columns are fixed , must follow structure, strict and table based

Here we can also use joins, and data is structured, when need more accuracy like banks, transactions, it use indexes and acid properties so speed up queries.

In sql, we use vertical scaling, instead of adding more machines, making one server more powerfull, here the data would be shared across multiple servers, so it will be very strict



NoSQL -> it uses horizontal scaling, here the data will be more flexible and stored as JSON format and used in real time systems





**BENEFITS of RDBMS:**

structured data -> easy to understand, Data integrity ensures correct and consistent data, can connect multiple tables using JOIN, complex queries using sql, security due to control access using roles(GRANT, REVOKE)

&#x20;

**LIMITATIONS OF RDBMS:**

Fixed Schema, hard to change structure later, sometimes scaling difficulty, slower for unstructured data





Literals are called fixed values

SELECT \* FROM Students

WHERE name = 'Arun';

'Arun' → string

100 → number

'2026-04-20' → date

TRUE → Boolean





Keywords are special words with special meaning  that perform specific actions

SELECT, FROM, WHERE, INSERT



it is like a command we give to the database

SELECT, FROM, WHERE, INSERT, UPDATE, DELETE, CREATE, DROP



Data types means what kind of data a column can store

Numeric Types,

INT -> whole numbers(10,100)

FLOAT -> decimal



String types

VARCHAR(N) -> variable length text -> it only takes the required space

CHAR(n) -> it will always be fixed even if the data is small , it fills the remaining space with spaces



Date and time:

DATE,TIME,TIMESTAMP



SQL Operators:

to perform conditions and calculation



Comparison operator:

=,>,<,>=,<=,!=



Logical operator:



AND	both conditions true

OR	any one true

NOT	reverse condition



Arithmetic Operators:

\+	addition

\-	subtraction

\*	multiplication

/	division





DDL -> Data Definition Language

it is used to define and manage database structure



commands -> Create-> creates new table

Alter-> modify an exising table

drop -> deletes the entire table, it removes the table structure, data and indexes

Truncate -> delete all data from a table, delete all rows

Rename -> used to rename table





Once we installed DBMs , we can access it through IDES, integrated development Environments , these tools provide an interface for writing, testing and managing



Popular IDEs and tools,

SQL Server management studio(SSMS)

DBeaver supports multiple dbms



PhpMyAdmin -> web based tool for managing MySQL databases

pgAdmin -> PostgreSQL management tool





CREATE TABLE:

create table students(

id int primary key,

name varchar(50),

marks int,

);





create table employees(

empid int primary key,

empname varchar(10) not null,

salary int default 1000,

);





CREATE TABLE courses (

&#x20;   course\_id INT PRIMARY KEY,

&#x20;   course\_name VARCHAR(100) UNIQUE

);  -> unique ensures all the values in the column are unique so that there will be no duplicate values, all are distinct



create table orders(

&#x20; order\_id int primary key,

&#x20; order\_date date,

&#x20; amount decimal(10,2) check (amount > 0)

); --> check is used for checking whether it satisfies a specific condition





create table departments(

&#x20; dept\_id int primary key,

&#x20; dept\_name varchar(10)

);



create table employees(

&#x20; emp\_id int primary key,

&#x20; emp\_name varchar(10),

&#x20; dept\_id int,

&#x20; foreign key (dept\_id) references departments(dept\_id)

);

&#x20;



create table products(

&#x20; product\_id int primary key,

&#x20; product\_name varchar(10),

&#x20; price int,

&#x20; created\_at timestamp

&#x20; );





composite key means two or more columns together act as the primary key



auto increment means the value increases automatically for each new row



**adding new column:**

&#x20;

alter table enrollments

add age int;  --> for adding new column



alter table enrollments

add email varchar(20);



**For renaming column name:**



alter table enroll

rename column name to student\_name;



**for deleting the column:**



alter table enroll

drop column age;



**for setting the default value:**



alter table students

alter marks set default 10;



**for adding a column as primary key:**



alter table students

add primary key(marks);



DROP:



drop table students --> deletes the entire table structure and all data



drop table employees --> removes full table



drop database students\_db --> deletes the entire database



drop table if exists courses; --> it will drop table only if it exists



**for dropping a primary key:**



ALTER TABLE students

DROP PRIMARY KEY;



**for dropping multiple tables:**



DROP table students, employees, courses;





Truncate -> removes all rows from a table but keeps structure, faster than delete



truncate table students;



RENAME:



rename table students to college\_students;



rename table employees to staff;



rename column name to student\_name;



DML ---> used to manage and manipulate data inside tables



ddl works on changing structure, dml works on data



COMMANDS:

insert, select,update, delete



**insert:**



used to add new rows into a table





INSERT INTO students (id, name, marks)

VALUES (1, 'Arun', 85);



**insert without column name:**



INSERT INTO students

VALUES (1, 'Arun', 85);



insert multiple rows:



INSERT INTO students(id,name,marks)

values

(3,'kumar',34),

(4,'ravi', 55),

(5,'deepak',98);



INSERT WITH NULL

INSERT INTO students (id, name, marks)

VALUES (9, NULL, 70);



**insert with default value:**

INSERT INTO students (id, name, marks)

VALUES (7, 'Meena', DEFAULT);





**SELECT -->** it is a query language used to retrieve data from a database



select \* from students;

select name,rollno from students;

select \* from students where marks>50;



select \* from students

order by marks asc;



select \* from students

order by marks desc;



select \* from students

limit 2;



**for removing duplicate values:**



select distinct marks from students;



select name as student\_name

from students;



select name,marks+10 as bonus\_marks

from students;



select \* from students

where marks > 40 and marks < 90;



**retrieve values with starting:**

select \* from students

where name like 'r%';



**retrieve values with ending:**

select \* from students

where name like '%n';



**retrieve values with inbetween:**

select \* from students

where name like '%n%';



select \* from students

where marks in (40,50,99);



select \* from students

where marks between 40 and 90;



select \* from students

where marks is null;



**Aggregate functions perform calculation on multiple rows and return a single result**



select count(\*) from students;



select count(marks) from students;



select sum(marks) from students;



select avg(marks) from students;



select max(marks) from students;



select min(marks) from students;



**other aggregations:**



select group\_concat(name)

from students;



+------------------------+

| group\_concat(name)     |

+------------------------+

| kumar,ravi,Arun,deepak |

+------------------------+





select sum(distinct marks)

from students;



+---------------------+

| sum(distinct marks) |

+---------------------+

|                 144 |

+---------------------+



**group by used to group rows that have same values:**



select dept, sum(salary)

from students group by dept;



**having is used to filter grouped data:**



select dept, sum(salary)

from students group by dept

having sum(salary) > 2000;



UPDATE --> is used to modify existing data in a table



update students set dept='cse'

where id = 1;

select \* from students;



update students set dept='ECE';

select \* from students;



update students set name='you', dept='AIDS' where id = 1;

select \* from students;



update students set salary = salary + 1000 where dept = 'aids';

select \* from students;



update students set salary = '4000' where id in (2,3);

select \* from students;



Delete --> used to remove rows from a table



delete from students where id = 1;

select \* from students;



delete from students where salary < 3000;

select \* from students;



delete from students where id in(1,2);

select \* from students;



**DCL --> data control language**



used to control access and permissions, security rules



GRANT --> give permission to users



grant select, insert on students to user1;--> user1 can read and insert data in students table



REVOKE --> removes permission from users



revoke insert on students from user1;  --> user1 can no longer access



TCL --> transaction control language --> used to manage transactions in a database



it controls saving, undoing, or grouping databases operations safely.



commit -> all changes will be saved permanently , in database



rollback --> undo all the operations since last commit and it goes to the previous state



savepoint --> it will create the last checkpoint , instead of full rollback , u can move to the last checkpoint



For subtracting we use,

select count(city) - count(distinct city) from STATION;





**for getting the shortest and longest city name based on their lengths**



(select CITY, length(CITY) from station

order by length(CITY), CITY

fetch first 1 row only)

UNION ALL



(select CITY ,length(city) from station

order by length(CITY) desc,city

FETCH first 1 row only  --> gives first row only instead we can also use limit 1

);



**for getting values starting with vowels:**



select distinct city from STATION

where city like 'A%'

or city like 'E%'

or city like 'I%'

or city like 'O%'

or city like 'U%';





wildcard:



SELECT \* FROM Customers

WHERE City LIKE '\_ondon';



it will return all customers which is followed by \_ondon



it will L\_\_on



Return all customers starting with either "b", "s", or "p":



SELECT \* FROM Customers

WHERE CustomerName LIKE '\[bsp]%';





























































&#x20;

