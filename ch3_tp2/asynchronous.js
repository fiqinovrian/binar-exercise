//asynchronous
console.log("Hello Binarian !");

setTimeout(() => { console.log("Javascript")}, 100);
console.log("Developer");


//synchronous
console.log("Hello Binarian !");
console.log("Javascript");
console.log("Developer");

function kuadratAsync(x) {
    setTimeout(() => x*x, 100);
}
console.log(kuadratAsync(5));

function kuadratAsync2(x, callback){
    setTimeout(() => callback(x*x), 100);
}
kuadratAsync2(5, console.log);

