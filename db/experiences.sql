CREATE IF NOT EXISTS experiences {
    id serial not NULL PRIMARY KEY,
    title varchar(50) not NULL,
    start_date date not NULL,
    end_date date,
    detailed_position varchar(100) not NULL,
    description varchar(500) not NULL
}