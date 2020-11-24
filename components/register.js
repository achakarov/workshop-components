export default class Register extends HTMLElement{
    constructor(){
        super();
      
    }
    connectedCallback(){
        this.innerHTML = 'In Register Component'
    }
}