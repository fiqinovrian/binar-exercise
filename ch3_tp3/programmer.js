/*
class Programmer extends Human {
    constructor(name, address, programmingLanguage){
        //memanggil constructor super / parent class
        //dalamkasus ini human.constructor
        super(name, address);
        this.programmingLanguage = programmingLanguage;
    }

    introduce(){
        //memanggil instance method introduce dari super class
        super.introduce();
        console.log('I can write', this.programmingLanguage);
    }

    code(){
        console.log('Code same',
            this.programmingLanguage[Math.floor(Math.random() * this.programmingLanguage.length)]
        );
    }
}
*/
/*
class Human {
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    //this is public instance method
    introduce(){
        console.log(`Hello, my name is ${this.name}`)
    }

    //This is public static method
    static isEating(food){
        let foods = ["plant", "animal"];
        return foods.includes(food.toLowerCase());
    }
}

let mj = new Human("Michael Jackson","Isekai");
console.log(mj);

console.log(mj.introduce());
console.log(Human.isEating("Plant"));
console.log(Human.isEating("Human"));
*/
/*
class Human{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    #doGossip = () => {
        console.log(`My address will become viral ${this.address}`)
    }
    talk(){
        console.log(this.#doGossip()); //call the private method
    }
    static #isHidingArea = true;
}

let mj = new Human("Michael Jackson","Isekai");
console.log(mj.talk())
// try {
//     Human.#isHidingArea
//     mj.#doGossip()
// }
// catch(err){
//     console.error(err);
// }
*/

/*
class Human {
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    _call(){
        console.log(`Call me as a ${this.name}`)
    }
}

class Programmer extends Human {
    constructor(name, address, task, salary){
        super(name, address);
        this.task = task;
        this.salary = salary;
    }
    doCall(){
        super._call()
    }
}

let sb = new Human("Sabrina", "Jakarta");
let job = new Programmer("Developer","$1000");
console.log(sb._call());
console.log(job.doCall());
*/

class Human{
    constructor(name, address){
        //if statement ini memastikan kelas Human tidak digunakan untuk membuat object secara langsung
        if(this.constructor === Human){
            //berikan error jika kelas Human digunakan untuk membuat object secara langsung
            throw new Error("Cannot instantiate from Abstact Class");
        }
        this.name = name;
        this.address = address;
    }

    //kelas abstract boleh memiliki instance method / static method
    introduce(){
        console.log(`Hello, my name is ${this.name}`);
    }

    //kelas abstract bisa memiliki abstract method 
    //ini yang akan dimanfaatkan untuk menyembunyikan detail
    work(){
        throw new Error("Cannot call abstract method");
    }
}
/*
class Police extends Human {
    constructor (name, address, rank){
        super(name, address);
        this.rank = rank;
    }

    work(){
        console.log("Enforcing law");
    }
}

class Doctor extends Human {
    constructor (name, address, specialist){
        super(name, address);
        this.specialist = specialist;
    }

    work(){
        console.log("Treat patient");
    }
}

//fungsi ini adalah contoh fungsi yang memanfaatkan abstraction
// fungsi ini memeriksa object human melalui parameter human
// kemudian memanggil method work yang ada di abstract class human
function goToWork(human){
    return human.work();
}

let binarian = new Police("Binarian", "Jogja", "Captain");
let sabrina  = new Doctor("Sabrina","Tangerang","General");

//dengan memanggil goToWork, kita tidak tahu apa yang terjadi di kelas Police ataupun doctor
// kita hanya tau keduanya memiliki method work dan akan dipanggil ketika menjalankan goToWork

goToWork(binarian);
goToWork(sabrina);
*/

class Police extends Human{
    constructor(name, address, rank){
        super(name, address);
        this.rank = rank;
    }

    work(){
        console.log("Enforcing Law");
    }
}

class Doctor extends Human{
    constructor(name, address, specialist){
        super(name, address);
        this.specialist = specialist;
    }
}
