export default class PageOne extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = this.classList.contains('expand') ? this.getTemplate() : this.innerHTML = "";

    }

    getTemplate(){
        return `
            <img src="https://cdn.pixabay.com/photo/2021/08/30/16/28/dewdrops-6586339_960_720.jpg"></img>
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

customElements.get('page-one')?? customElements.define('page-one',PageOne);
