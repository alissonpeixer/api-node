TRANSLATE:  [PORTUGUES 🇧🇷](READMEENG.md)

# API Project with Fastify, Prisma, and Swagger

This is a Node.js API project that utilizes Fastify, Prisma, and Swagger technologies to create a robust and documented API.

## Requirements

Make sure you have Node.js and npm (or yarn) installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Setup

1. Clone this repository to your local environment:

   ```bash
   git clone https://github.com/alissonpeixer/api-node.git
   ```

2. Install project dependencies:

   ```bash
   cd project-name
   ```


3. Create a .env file at the root of your project to set up the necessary environment variables. You can use the provided .env.example file as a reference.

4. Run Prisma migrations to set up the database:

   ```bash
   npx prisma migrate dev
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

#### The Fastify server will run on the specified port (8080)

## API Documentation

API documentation is automatically generated using Swagger.<br>

After starting the server, you can access the API documentation at: <http://localhost:8080/doc>

Be sure to consult the documentation to understand the available endpoints and request/response formats.

## Project Structure

Briefly explain the structure of your project, highlighting the most important directories. For example:

`src/:` Contains the application source code.<br>
`router/:` API route definitions.<br>
`prisma/:` Prisma.<br>
`prisma/migrations/:` Prisma migrations to maintain the database schema.<br>

### How to Create an Endpoint?<br>

Application endpoints can be created simply and easily, with all files within the router/ directory, for example: get.ts. Each file should be a module and should contain the HTTP method and path to be recognized as a route by Fastify.

## Contribution

If you'd like to contribute to this project, follow these steps:<br>

1. Fork this repository.<br>

2. Create a new branch: git checkout -b feature/new-feature<br>

3. Make your changes and commit: git commit -m 'Added a new feature'<br>

4. Push to the remote branch: git push origin feature/new-feature<br>

5. Submit a Pull Request for review.<br>
