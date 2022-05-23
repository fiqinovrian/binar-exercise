//promise
function isPasswordCorrect(password){
    return new Promise((resolve, reject) => {
        console.log('Password:', password)
        if(password !== '123456')
        return reject("Wrong Password !")
        resolve ("Password is correct!")
    })
}

isPasswordCorrect('123456')
    .then(resolve => console.log(resolve))
    .catch(reject => console.error(reject))

isPasswordCorrect('123455')
    .then(resolve => console.log(resolve))
    .catch(reject => console.error(reject))