# TypeScript-NodeJS-Express-Overview

## About

Working with TypeScript to build a REST API with NodeJS and Express. NodeJS is not capable of running TypeScript as a file but can run found JavaScript code. For example compiling the script `console.log("Hello terminal!")` within app.ts with command node app.ts will print Hello terminal! within terminal but `let hello: string; hello = "Hello terminal!"; console.log(hello);` will compile with an error because regular JavaScript does not define type with `let hello: string`. One way to navigate working with TypeScript within NodeJS is using a third party [Node Type library](https://github.com/TypeStrong/ts-node) that will configure types set in a TypeScript file for compilation. This is a great solution for Developer Code vs Production Code but within this overview, a different approach will be used.

## Starting Setup

1. `npm init` for installing dependencies
2. `tsc --init` for tsconfig settings
   Confirm settings that "target" is set to the last ES (for this 2022). Next make sure "module" is set to common js, moduleResolution" is set to node, "outDir" is set to ./dist, "rootDirs" is set to ./src

### Dependencies

For application **production** level (--save)

1. [Express](https://www.npmjs.com/package/express)
2. [body-parser](https://www.npmjs.com/package/body-parser)

For application **developer** level (--save-dev)

1. [nodemon](https://www.npmjs.com/package/nodemon)
2. [@types/node](https://www.npmjs.com/package/@types/node)
3. [@types/express](https://www.npmjs.com/package/@types/express)

## Setting up Routes to API

To begin routes to the API will be established using Express through Middleware and Types.

### Postman

Used to run mock API calls to check routes

1. Using established route of `localhost:3000/todos/` get method route and create method route can be tested.
2. GET / POST: To create a new todo a new raw JSON object must be set in correct annotation ex {"text":"New todo"} then sent. To check if sent, send another GET request.
3. PATCH: Patch requires route of `localhost:3000/todos/ID` because nodemon is being utilized for development, a new todo must be sent. Once completed, run a new get request to copy the id for the todo. Using a new request open a new request, set your route to `localhost:3000/todos/COPIED_ID` and set request to PATCH and type in a new raw JSON object as if you were creating a new todo. Run and new message should appear with patched todo.
4. DELETE: Delete requires having the id of a todo, if starting from nodemon following above to create items then create a route to grab id and delete. Once sent, a new message will appear for deletion.

## Other Resources

[TypeScript](https://www.typescriptlang.org/)
[NestJS](https://nestjs.com/)
[Angular](https://angular.io/)
