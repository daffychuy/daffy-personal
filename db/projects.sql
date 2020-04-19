CREATE IF NOT EXISTS projects {
    id serial not NULL primary key,
    title varchar(100) not NULL,
    date varchar(50) not NULL,
    description varchar(100) not NULL,
    project_link text
}