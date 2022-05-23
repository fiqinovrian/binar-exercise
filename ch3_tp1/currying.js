function hitungVolume1(p,l,t){
    return p*l*t;
}
console.log(hitungVolume1(4,5,6));

function hitungVolume(p){
    return function(l){
        return function (t){
            return p * l * t;
        }
    }
}
console.log(hitungVolume(4)(5)(6))