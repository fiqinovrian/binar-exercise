const strArray = ['Javascript', 'Java', 'C'];
function forEach(array, callback) {
    const newArray = [];
    for(let i =0; i < array.length; i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}

const lenArray = forEach(strArray, (item) => {
    return item.length;
});
console.log(lenArray)

function cekUmur(umur){
    if(umur < 13){
        hasilCek = "Maaf, usia Anda dibawah ketentuan pengguna"
        return hasilCek
    } else 
    if(umur >= 13){
        hasilCek = "Silahkan lanjutkan registrasi"
        return hasilCek
    } else {
        hasilCek = "Mohon masukkan angka usia anda"
        return hasilCek
    }
}
console.log(cekUmur(16))

arrowPanjang = (namDep, namBel) => namDep + " " + namBel;
console.log(arrowPanjang("a","b"));
