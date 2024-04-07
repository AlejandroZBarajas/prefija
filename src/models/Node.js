export class Node {
    #element
    #top

    constructor(element) {
        this.#element = element;
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