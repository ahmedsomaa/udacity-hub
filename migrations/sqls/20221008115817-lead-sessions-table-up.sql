CREATE TABLE lead_sessions (
    id SERIAL PRIMARY KEY,
    session_id INTEGER REFERENCES sessions(id) NOT NULL,
    session_lead_id INTEGER REFERENCES session_leads(id) NOT NULL
);