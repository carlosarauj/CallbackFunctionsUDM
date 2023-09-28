//CallbackFunctions
function omt(min = 1000, max = 5000){
    let num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function c1(ecall){
    setTimeout(function() {
        console.log('oi')
        if (ecall) ecall()
    }, omt())
}

function c2(ecall){
    setTimeout(function() {
        console.log('oi2')
        if (ecall) ecall()
    }, omt())
}

function c3(ecall){
    setTimeout(function() {
        console.log('oi3')
        if (ecall) ecall()
    }, omt())
}

c1(c1callback)

function c1callback(){
    c2(c2callback)
}

function c2callback(){
    c3(c3callback)
}

function c3callback(){
    console.log('HELLOU')
}