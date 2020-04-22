CREATE table IF NOT EXISTS basic (
    id serial NOT NULL PRIMARY KEY,
    page_title varchar(100) not NULL,
    page_description varchar(300) not NULL,
    about_me text not NULL
);