# TypeScript-NodeJS-Express-Overview

## About

Working with TypeScript to build a REST API with NodeJS and Express. NodeJS is not capable of running TypeScript as a file but can run found JavaScript code. For example compiling the script `console.log("Hello terminal!")` within app.ts with command node app.ts will print Hello terminal! within terminal but `let hello: string; hello = "Hello terminal!"; console.log(hello);` will compile with an error because regular JavaScript does not define type with `let hello: string`. One way to navigate working with TypeScript within NodeJS is using a third party [Node Type library](https://github.com/TypeStrong/ts-node) that will configure types set in a TypeScript file for compilation. This is a great solution for Developer Code vs Production Code but within this overview, a different approach will be used.

## Starting Setup

1. `npm init` for installing dependencies
2. `tsc --init` for tsconfig settings
   Confirm settings that "target" is set to the last ES (for this 2022). Next make sure "module" is set to common js, moduleResolution" is set to node, "outDir" is set to ./dist, "rootDirs" is set to ./src

### Dependencies
