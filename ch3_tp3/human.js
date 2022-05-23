class Human {
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    introduce(){
        console.log(`Hi, my name is ${this.name}`);
    }

    work(){
        console.log('Work');
    }
}

//Buat child class dari class Human
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