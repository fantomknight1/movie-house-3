DROP TABLE if exists theaters CASCADE;
DROP TABLE if exists movies CASCADE;
DROP TABLE if exists theater_movie_showtime CASCADE;

CREATE TABLE theaters (
  theater_id serial PRIMARY KEY UNIQUE,
  name VARCHAR(255)
);

CREATE TABLE movies (
  movie_id serial PRIMARY KEY UNIQUE,
  title VARCHAR(255),
  img_url VARCHAR(255),
  year int,
  rating numeric,
  director VARCHAR(255),
  plot VARCHAR(255),
  actors VARCHAR(255)
);

-- showTime for each movie_theater pair
CREATE TABLE theater_movie_showtime (
  showTime_id serial PRIMARY KEY UNIQUE,
  showTime VARCHAR(255),
  theater_id integer REFERENCES theaters ON DELETE CASCADE,
  movie_id integer REFERENCES movies ON DELETE CASCADE
);
