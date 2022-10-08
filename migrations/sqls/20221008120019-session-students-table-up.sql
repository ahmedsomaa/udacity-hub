CREATE TABLE session_students (
    id SERIAL PRIMARY KEY,
    session_id INTEGER REFERENCES sessions(id) NOT NULL,
    studnet_id INTEGER REFERENCES students(id) NOT NULL
);