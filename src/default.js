import Icon from './header.png';


const Default = (function(){
    const content = document.getElementById('content');

//this section appends container inside content for the content
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

//this section makes the footer inside content not container
    const footer = document.createElement('footer');
    footer.textContent = `Project Made By Akmal Izuddin © The Odin Project 2021`;

    content.appendChild(footer);

    const upperContainer = document.createElement('div');
    upperContainer.classList.add('upper-container');

    container.appendChild(upperContainer);

//this function makes a container div for content of the website
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    container.appendChild(mainContent);

//this function makes a container div for content of the website


//this section makes the cafe icon
    const _makeIcon = function(){
        const pokeIcon = new Image();
        pokeIcon.src = Icon;
        pokeIcon.classList.add('pokeIcon');

        upperContainer.appendChild(pokeIcon);

        return pokeIcon;
    };

//this section makes the navigation bar
//this section is the array and constructor that the navigation bar will be based on
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

//this function makes the navigation bar
    const _makeNavBar = function(){
        const navBarContainer = document.createElement('div')
        navBarContainer.classList.add('nav-container');
        upperContainer.appendChild(navBarContainer);

        for(let obj of _navBar){
            let btn = document.createElement('button');
            btn.innerText = obj.name;
            btn.classList.add('btn');
            btn.id = obj.name;

            navBarContainer.appendChild(btn);
        }
        
        return navBarContainer;
    };

    const makeDefault = function(){
        _makeIcon();
        _makeNavBar();
    };


    return{
        makeDefault,
    };
})();

export {Default};