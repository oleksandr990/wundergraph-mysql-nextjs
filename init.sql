create table if not exists users
(
    id    serial primary key not null,
    email varchar(255)       not null,
    name  text               not null,
    unique (email)
);

create table if not exists todos
(
    id       serial primary key not null,
    title  text               not null,
    message  text               not null
);