//exercicio 1
let frutas = ["maça","banana","pera","laranja","brayanStebanLinoRoger"]

function PercorrerArray(array){
    let size = array.length
    for(let i = 0;i < size;i++){
        console.log(array[i])
    }
}

PercorrerArray(frutas)
//exercicio 2
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function ParImpar(array){
    let size = array.length
    let par = []
    let impar = []
    let npar = 0
    let nimpar = 0
    for(let i = 0;i < size;i++){
        if(array[i] % 2 == 0){
            par[npar] = array[i]
            npar++
        }else{
            impar[nimpar] = array[i]
            nimpar++
        }
        
        
    }
    console.log(par)
    console.log(impar)
}

ParImpar(num)


