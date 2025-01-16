const sum = (num1, num2) => {

    if(typeof num1 !==  "number" || typeof num2 !== "number"){
        throw new Error('Os parâmetros devem ser números')
    }
    return num1 + num2
}

const sub  = (num1, num2) => {
    
    if(typeof num1 !==  "number" || typeof num2 !== "number"){
        throw new Error('Os paramentros devem ser numeros')
    }
    return num1 - num2
}

const div  = (num1, num2) => {
    
    if(typeof num1 !==  "number" || typeof num2 !== "number"){
        throw new Error('Os paramentros devem ser numeros')
    }
    return num1 / num2
}
const mult = (num1, num2) => {
    
    if(typeof num1 !==  "number" || typeof num2 !== "number"){
        throw new Error('Os paramentros devem ser numeros')
    }
    return num1 * num2
}

module.exports = {sum, sub, div, mult}

