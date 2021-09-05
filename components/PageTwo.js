export default class PageTwo extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = this.classList.contains('expand') ? this.getTemplate() : this.innerHTML = "";

    }

    getTemplate(){
        return `
            <img src="https://cdn.pixabay.com/photo/2021/08/24/15/38/sand-6570980_960_720.jpg"></img>
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

customElements.get('page-two')?? customElements.define('page-two',PageTwo);
