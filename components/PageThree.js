export default class PageThree extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = this.classList.contains('expand') ? this.getTemplate() : this.innerHTML = "";
    }

    getTemplate(){
        return `
            <img src="https://cdn.pixabay.com/photo/2021/08/25/17/22/flowers-6574079_960_720.jpg"></img>
        `;
    }
    updatedClassList(){
        console.log('class upldated');
        this.render();
    }
    
    connectedCallback(){

    }

    disconnectedCallback(){

    }
};

customElements.get('page-three')?? customElements.define('page-three',PageThree);
