CREATE TABLE session_students (
  id SERIAL PRIMARY KEY,
  session_id INTEGER REFERENCES sessions(id) NOT NULL,
  student_id INTEGER REFERENCES students(id) NOT NULL
);