
/*//fungsi yang mereturn promise
function isPasswordCorrect(password) {
    return new Promise((resolve, reject) => {
        if(password !== '123456'){
            return reject("Wrong Password !")
        }
        return resolve("Password is incorrect")
    });
}

//cara panggil dengan .then & .catch
isPasswordCorrect('12345').then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err);
});

//cara panggil dengan async-await & catch
async function checkPassword(){
    try {
        let result = await isPasswordCorrect('123456');
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

checkPassword();

*/

function hujanTidak(hujan){
    return new Promise((resolve, reject) => {
        if(hujan == false){
            return resolve("Nanti malam ada PR")
        } 
        return reject("Nanti malam tidak ada PR")
    });
}

hujanTidak(false).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err);
});