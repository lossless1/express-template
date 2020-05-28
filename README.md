express-template

# Installation

`$ npm i`

# Before running

`$ npm run db:migrate`

# Running dev

`$ npm run start:dev`

# Running prod

`$ npm run start`

## Example usage

`user.http` is example http file to send and receive data from server in a moment. Its working like swagger but in vscode env.

## Postgres db

Change Dialect to `postgres`

`$ docker run -p 5432:5432 -d --name test-postgres -e POSTGRES_PASSWORD=test_password -e POSTGRES_USER=test_user -e POSTGRES_DB=test_db_name postgres`
