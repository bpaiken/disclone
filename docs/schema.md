# Disclone Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | string    | not null
user_id         | integer   | not null, foreign key, indexed
channel_id      | integer   | not null, foreign key, indexed

## channels
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
topic           | string    | 
direct          | boolean   | not null, default: false
server_id       | integer   | foreign key, indexed

## servers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null

## subscriptions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
server_id       | integer   | not null, foreign key  indexed                     

## directs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
channel_id      | integer   | not null, foreign key  

