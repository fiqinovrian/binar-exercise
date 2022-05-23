class Human {
    constructor(name, address, tanggalLahir) {
        this.name = name;
        this.address = address;
        //this.warnaMata = "hitam";
        //this.tanggalLahir = Date(tanggalLahir);
        this.tanggalLahir = tanggalLahir;
        this.warnaMata = Human.warnaMata;

    } 
    static warnaMata = "hitam"
    goodNight() {
        console.log("Selamat Malam");
    }
    checkWarnaMata(){
        return this.warnaMata;
    }
}


let johanes = new Human("Johanes","Indonesia","2001-01-01");

johanes.goodNight();
console.log(johanes.tanggalLahir);
//console.log(Human.warnaMata());
console.log(johanes);
console.log(Human.warnaMata);
