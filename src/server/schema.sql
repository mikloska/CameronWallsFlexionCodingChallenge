CREATE DATABASE test_database;

CREATE TABLE tests(
    test_id SERIAL PRIMARY KEY,
    test_name VARCHAR(100)
);

CREATE TABLE questions(
    question_id SERIAL PRIMARY KEY,
    question_value DECIMAL,
    measured_in VARCHAR(50),
    converted_to VARCHAR(50),
    answer DECIMAL,
    test_id INTEGER REFERENCES tests (test_id)
);