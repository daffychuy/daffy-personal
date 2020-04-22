CREATE table IF NOT EXISTS projects (
    id serial not NULL primary key,
    title varchar(100) not NULL,
    date varchar(50) not NULL,
    description text not NULL,
    project_link text
);