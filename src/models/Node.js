export class Node {
    #element
    #top
    #next
    
    constructor(element) {
        this.#element = element;
        this.#next = null;
    }

    getData () {
        return this.#element
    }

    setPointer(top){
        this.#top=top
    }

    getPointer(){
        return this.#top
    }
}