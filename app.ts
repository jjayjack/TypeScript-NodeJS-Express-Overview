//Node JS can read the first console from running node app.ts in terminal but will error for hello: string because it does not understand :

console.log("Hello terminal!");

let hello: string;
hello = "Hello terminal!";
console.log(hello);
