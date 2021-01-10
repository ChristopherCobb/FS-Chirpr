GRANT ALL PRIVILEGES
on chirperDB.*
to 'chirprapp'@'localhost';

drop table users;

create database chirperDB;
use chirperDB;

create table users (
	id int not null auto_increment primary key,
    name varchar(100) not null,
    email varchar(100) not null,
    password varchar(40) null,
    _created datetime default current_timestamp);

create table chirps (
	id int not null auto_increment primary key,
    userid int not null,
    content varchar(280) not null,
    location varchar(100),
    _created datetime default current_timestamp
);

create table mentions (
	userid int not null,
    chirpid int not null,
    primary key (userid, chirpid)
);

ALTER TABLE mentions
ADD FOREIGN KEY (userid) REFERENCES users(id);

ALTER TABLE mentions
ADD FOREIGN KEY (chirpid) REFERENCES chirps(id);

ALTER TABLE chirps
ADD FOREIGN KEY (userid) REFERENCES users(id);

insert into users(name, email, password) values 
("Josh", "josh@nfdnenf.com", "hunter2"),
("Jake", "jake@nfdnenf.com", "hunter3"),
("Garrett", "garrett@nfdnenf.com", "hunter4"),
("Boyd", "boyd@nfdnenf.com", "hunter3"),
("Chris", "Chris@nfdnenf.com", "hunter3"),
("Jacob", "jacob@nfdnenf.com", "hunter3"),
("Christopher", "chris@nfdnenf.com", "hunter3"),
("Katie", "katie@nfdnenf.com", "hunter3"),
("Steve", "asdasd@nfdnenf.com", "hunter3"),
("Matt", "asdasd@nfdnenf.com", "hunter3");

select * from users;

insert into chirps(userid, content, location) values 
(1,'1this is content','1this is location'),
(2,'2this is content','2this is location'),
(3,'3this is content','3this is location'),
(4,'4this is content','4this is location'),
(5,'5this is content','5this is location'),
(6,'6this is content','6this is location'),
(7,'7this is content','7this is location'),
(8,'8this is content','8this is location'),
(9,'9this is content','9this is location'),
(10,'10this is content','10this is location');



insert into mentions (userid, chirpid) values 
(3, 45),
(3, 70),
(4, 30),
(5, 70),
(2, 90);

select c.content from chirps c;
select u.name, u.email from users u;

Select 
  Chirps.*,
   Users.name 
   FROM Chirps 
   Join Users 
   on Users.id = Chirps.userid;
   
   update chirps Set content = "this is an edited chirp" WHERE chirps.id = 15; 
   

select users.name, chirps.content from users
inner join chirps
on (users.id = chirps.userid);

select * from Users
join Chirps on users.id = chirps.userid;

-- user number 3
select users.* from users
join mentions 
on (mentions.userid = users.id)
where users.id = 3;