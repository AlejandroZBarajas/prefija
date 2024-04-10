import{Node} from"../models/Node.js"

export class Stack{
    #items = []
    #top=null
    #size=0

    constructor() {
        this.#items
        this.top = null;
        this.size = 0;
    }

    push(element) {
        let newNode = new Node(element);
        if (!this.#top) {
            this.#top = newNode;
            this.#size++
        } else {
            newNode.next = this.#top;
            this.#top = newNode;
            this.#size++;
        }
    }

    pop() {
        if (!this.#top) return null;
        let popped = this.#top;
        this.#top = this.#top.next;
        popped.next = null;
        this.size--;
        return popped.getData();
    }

    peek(){
        if (!this.#top) return null;
        let peek = this.#top
        return peek.getData()
    }

    isEmpty(){
        if (this.#size==0)
        return true
    }

    getSize(){
        return this.#size
    }

    getItems(){
        return this.#items
    }

    clear(){
        this.#top=null
    }
}