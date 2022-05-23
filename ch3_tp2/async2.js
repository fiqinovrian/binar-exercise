function p1(){
    console.log('p1 done');
}

function p2(){
    setTimeout(function (){
        console.log('p2 done');
    }, 100);
}

function p3(){
    console.log('p3 done');
}
p1()
p2()
p3()

function p4(){
    console.log('p4 done');
}

function p5(callback){
    setTimeout( function(){
        console.log('p5 done');
        callback;
    }, 100);
}

function p6(){
    console.log('p6 done');
}

p4()
p5(p6)