/*Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.*/

var obj = {prop1: "valor 1", prop2: "valor 2", prop3: "valor 3"}
var lista = ['primeiro','segundo','terceiro']

for (const propriedade in obj){
    console.log(`${propriedade}: ${obj[propriedade]}`)
}

for (const elements of lista){
    console.log(elements)
}