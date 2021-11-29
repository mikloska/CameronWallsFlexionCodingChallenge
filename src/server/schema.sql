CREATE DATABASE test_database;

CREATE TABLE test_name(
    test_id SERIAL PRIMARY KEY,
    test_name VARCHAR(100)
);

CREATE TABLE questions(
    question_id SERIAL PRIMARY KEY,
    question_value INTEGER,
    measured_in VARCHAR(50),
    converted_to VARCHAR(50),
    test_id INTEGER REFERENCES test_name (test_id)
);