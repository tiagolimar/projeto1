const numeros = [1,2,3,4,5,6,7,8,9,10]

numeros.map(numero1=>{
    console.log(`Tabuada do ${numero1}`)
    numeros.map(numero2=>(
        console.log(`${numero1}*${numero2}=${numero1*numero2}`)
    ));
    console.log('\n\n')
})