export default class PageZero extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = this.classList.contains('expand') ? this.getTemplate() : this.innerHTML = "";

    }

    getTemplate(){
        return `
            <img src="https://cdn.pixabay.com/photo/2021/08/27/10/16/baby-6578335_960_720.jpg"></img>
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

customElements.get('page-zero')?? customElements.define('page-zero',PageZero);
