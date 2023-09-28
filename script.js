//CallbackFunctions
function c1(){
    setTimeout(function() {
        console.log('oi')
    }, 2000)
}

function c2(){
    setTimeout(function() {
        console.log('oi2')
    }, 4000)
}

function c3(){
    setTimeout(function() {
        console.log('oi3')
    }, 6000)
}

c1()
c2()
c3()
console.log('hello')