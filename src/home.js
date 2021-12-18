import Icon from './header.png';

const Home = (function(){
    //this section makes the header icon
    const content = document.getElementById('content');

    const _createHeader = function(){
        const headerIcon = new Image();
        headerIcon.src = Icon;
        headerIcon.classList.add('headerIcon');

        content.appendChild(headerIcon);

        return headerIcon;
    };

    //this section makes the navbar
    const _navBar = [];

    class _NavBtn {
        constructor(name){
            this.name = name.toUpperCase();
        }
    };

    const home = new _NavBtn('home');
    const menu = new _NavBtn('menu');
    const contact = new _NavBtn('contact');
    _navBar.push(home, menu, contact);

    const _createNavBar = function(){
        const navCon = document.createElement('div')
        navCon.classList.add('nav-container');
        content.appendChild(navCon);

        for(let obj of _navBar){
            let btn = document.createElement('button');
            btn.innerText = obj.name;
            btn.classList.add('btn');
            btn.id = obj.name;

            navCon.appendChild(btn);
        }
        
        return navCon;
    }

    //this section creates the homepage of the website
    const createHome = function(){
        _createHeader();
        _createNavBar();
    }
        
    return{
        createHome,
    };

})();

export {Home};