/*
class Car{
    constructor(jenis, warna, tahunDikeluarkan){
        this.jenis = jenis;
        this.warna = warna;
        this.tahunDikeluarkan = tahunDikeluarkan;
    }
}

const biodata = {
    namaDepan: "Fiqi",
    namaBelakang: "Novrian",
    tanggalLahir: "15 Nov 1991",
    jenisKelamin: "Laki - Laki",
    fullName: function() {
        return this.namaDepan + " " + this.namaBelakang;
    }
};

console.log(biodata.fullName())
*/
class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    static isLivingOnEarth = true;
    static warnaMata = 'hitam';
    introduce(){
        console.log(`Hi, my name is ${this.name}`);
    }
    sapaan(){
        console.log(`Hai, selamat malam ${this.name}`);
    }
}
console.log(Human.isLivingOnEarth);

Human.prototype.greet = function(name){
    console.log(`Hi, ${name}, Im ${this.name}`);
}

Human.destroy = function(thing){
    console.log(`Human is destroying ${thing}`);
}
let fn = new Human('Fiqi Novrian', 'Pontianak');

console.log(fn);
console.log(fn instanceof Human);
fn.greet("Jokowi");
Human.destroy('Amazon forest');
console.log(Human.introduce);
console.log(Human.warnaMata);
