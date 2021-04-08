# Fatura

Fatura is a small application that represents products and their providers.

## How to start

1. Set environment variables to properly connect the database and start the server by creating a `.env` file and adding the variables. A sample of the env variables can be found in `.env.example`.

2. install all project dependencies with `npm install`

3. start the development server with `npm start`

## Structure

SQL (DDL Script) that describes the database schema can be found in [`/sql`](sql) folder.

Middlewares can be found in [`/middlewares`](middlewares) folder.

Routes can be found in [`/routes`](routes) folder.

## API

| Method | Endpoint                        | Query string                                                        | Description                                                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| GET    | `/products`                     | **page**, **limit**, optional **category** to filter by category id | paginate products and filter products by category if category id is provided as query string |
| PUT    | `/products/:id/toggle-featured` |                                                                     | toggle product as featured inside its category                                               |

## Database

- MySQL is used to connect the application, so make sure you have a MySQL driver that is running.

- For consistency, a SQL query is used for querying the database as it was required to write DDL script.

## Middlewares

- Pagination middleware is used to append a pagination object to req so that it becomes available for the endpoints using the middleware.
