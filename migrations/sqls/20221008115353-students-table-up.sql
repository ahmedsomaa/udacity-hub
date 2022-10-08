CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    session_lead_id INTEGER REFERENCES session_leads(id) NOT NULL
);