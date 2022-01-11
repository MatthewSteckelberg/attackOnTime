drop database if exists attack_prod;
create database attack_prod;
use attack_prod;

create table users (
	user_id int primary key auto_increment,
    username varchar(100) not null unique,
    password varchar(2048) not null,
    high_score int 
);

create table roles (
	role_id int primary key auto_increment,
    role_name varchar(50) not null unique
);

create table userRoles ( 
	user_id int not null,
    role_id int not null,
    
    constraint fk_userroles_user foreign key (user_id) references users(user_id),
    constraint fk_userroles_role foreign key (role_id) references roles(role_id),
    constraint pk_userroles primary key (user_id, role_id)
);

create table games (
	game_id int primary key auto_increment,
    game_name varchar(50) not null unique,
    description varchar(10000) not null
);

create table high_scores (
	high_score_id int primary key,
    high_score int not null,
    user_id int not null,
    
    constraint fk_userhighscore foreign key (user_id) references users(user_id)

);



