import PageOne from "./components/PageOne.js";
import PageTwo from "./components/PageTwo.js";
import PageThree from "./components/PageThree.js";
import PageZero from "./components/PageZero.js";

export default class MainApp extends HTMLElement {
    constructor(){
        super();
        this.pages = new Array();
        this.index = -1;
        this.render();
        this.router();
    }

    render(){
        this.innerHTML = this.getTemplate();
    }

    getTemplate(){
        return `
            <main>
                <page-zero id='page0' class="page"></page-zero>
                <page-one id='page1' class="page"></page-one>
                <page-two id='page2' class="page"></page-two>
                <page-three id='page3' class="page"></page-three>
            </main>
        `;
    }

    router(idx, evt){
        if(!evt){
            history.replaceState({},'Home','/root/');
            this.updateMain(-1);
        } else {
            history.pushState({idx:idx},'Home',`/root/page/${idx}`);
            this.updateMain(idx);
        }
    }

    updateMain(idx){
        if(this.index === idx) return;
        this.index = idx;

        this.pages.forEach(page=> {
            page.classList.remove('expand');
            page.updatedClassList();
        });
        if(0 <= idx){
            this.pages[idx].classList.add('expand');
            this.pages[idx].updatedClassList();
        }
    }

    moveBack(nav){
        if(0 <= nav.state.idx){
            this.updateMain(nav.state.idx);
        } else {
            this.updateMain(-1);
        }
    }

    connectedCallback(){
        this.pages = this.querySelectorAll('.page');
        this.pages.forEach((page,idx)=>{
            page.addEventListener('click',this.router.bind(this,idx));
        })

        window.onpopstate = this.moveBack.bind(this);
    }

    disconnectedCallback(){

    }
};


customElements.get('main-app')?? customElements.define('main-app',MainApp);