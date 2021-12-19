import Icon from './header.png';
import imgContent from './battle-cafe.png';

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

    //this sections makes the main content of the homepage of the website
    const _createMainContent = function(){
        //this makes the main content container
        const mainCon = document.createElement('div');
        mainCon.classList.add('mainCon-container');

        content.appendChild(mainCon);

        //this makes the main image
        const mainImg = new Image();
        mainImg.src = imgContent;
        mainImg.classList.add('main-img');

        mainCon.appendChild(mainImg);

        //this makes the main description of the cafe
        const mainDesc = document.createElement('div');
        mainDesc.classList.add('description-container');

        mainCon.appendChild(mainDesc);

        const desc = document.createElement('div');
        desc.classList.add('description');
        desc.textContent = `The Pokémon Café is a chain of coffee shops located throughout the 
                            Galar Region. Customers can visit to enjoy a variety of our finest 
                            products. The Pokémon Café's design is based on UK's popular coffee 
                            shops, Costa Coffee.`;
        
        mainDesc.appendChild(desc);

        return mainCon;
    };

    //this section makes the footer of the homepage
    const _createFooter = function(){
        //this makes the container for the footer
        const footCon = document.createElement('div');
        footCon.classList.add('footer-container');
        
        content.appendChild(footCon);

        //this makes the footer text
        const footText = document.createElement('div');
        footText.classList.add('footer');
        footText.textContent = `Project Made By Akmal Izuddin © The Odin Project 2021`;

        footCon.appendChild(footText);
    }

    //this section creates default header, navbar and footer for all tabs of the website
    const createDefault = function(){
        _createHeader();
        _createNavBar();
    };

    //this section creates the homepage of the website by calling all the functions above
    const createHome = function(){
        _createHeader();
        _createNavBar();
        _createMainContent();
        _createFooter();
    }
        
    return{
        createHome,
        createDefault,
    };

})();

export {Home};