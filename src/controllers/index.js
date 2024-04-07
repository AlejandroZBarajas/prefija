import { StackInfija, StackOperadores, StackSalida } from "./Dependencies.js";

let convertEquation=document.getElementById("btn")
convertEquation.addEventListener("click", function(){
    const equation=document.getElementById("equation").value
    fillStack(equation)
})

function fillStack(equation){
    let eq = equation
    for(let i=0; i< eq.length;i++){
        StackInfija.push(eq.charAt(i))
    }
    invertirStack(StackInfija)
}
function invertirStack(Stack){
    for(let i=0; i< Stack.getSize();i++){
        let char=Stack.pop()
        clasifyChars(char)
    } 
    if( !StackOperadores.isEmpty()){
        for(let i =0; i < StackOperadores.getSize();i++){
            StackSalida.push(StackOperadores.pop())
        }
    }
    let resultado = ""
    console.log(StackSalida.getSize())
    for(let i =0; i < StackSalida.getSize();i++){
        let charsalida = StackSalida.pop()
        console.log(charsalida)
        if(charsalida != null){
            resultado=resultado+charsalida
        }
    }
    printRes(resultado)
}
function printRes(resultado){
    document.getElementById("mostrarResult").innerText=resultado
}
function clasifyChars(character){
    let char = character
    if(!isNaN(char)){
        console.log("numero")
        StackSalida.push(char)     
    }
    if(isNaN(char)){
        if ( char == "("){
            let y = (StackOperadores.peek() )
            while(y != ")"){
                let x =(StackOperadores.pop())
                StackSalida.push(x)
                y = StackOperadores.peek()
            }
            if(StackOperadores.peek() == ")"){
                StackOperadores.pop()
            }
        }else{
            StackOperadores.push(char)
        }
    }    
}
