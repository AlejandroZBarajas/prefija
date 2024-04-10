//export {resultado}
import { StackInfija, StackOperadores, StackSalida } from "./Dependencies.js";
export class Converter{
    
    #OGequation
    #resultado
    
    constructor(eq){
        this.#OGequation=eq
        this.#resultado
    }

    clearResult(){
        this.#resultado = ""
    }

    getResult(){
        return this.#resultado
    }
    
    fillStack(equation){       
        let eq = equation
        for(let i=0; i< eq.length;i++){
        StackInfija.push(eq.charAt(i))
        }
    }
    
test(){
    for(let i =0; i < StackSalida.getSize();i++){
        console.log("> ",StackSalida.peek())
    }
}

    genResult(){
        if( !StackOperadores.isEmpty()){
            for(let i =0; i < StackOperadores.getSize();i++){
                StackSalida.push(StackOperadores.pop())
            }
        }
        for(let i =0; i < StackSalida.getSize();i++){
            let charsalida = StackSalida.pop()
            //console.log("> ",charsalida)
            if(charsalida != null){
                this.#resultado = this.#resultado + charsalida
            }
            //console.log(resultado)
        }
    }
    
    clasifyChars(character){       
        let char = character
        if(!isNaN(char)){            
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
               // console.log("hasta aqui vamos bien")
                StackOperadores.push(char)
            }
        }    
    }
    
}