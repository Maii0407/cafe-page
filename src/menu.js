import { Default } from "./default";
import eeveeLatteIcon from './menu-items/eevee-latte.png';
import liligantTeaIcon from './menu-items/liligant-tea.png';
import bunearyFrappeIcon from './menu-items/buneary-frappe.png';
import pachirisuFloatIcon from './menu-items/pachirisu-float.png';

const Menu = (function(){
    const mainContent = document.querySelector('.main-content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    mainContent.appendChild(menuContainer);

    const _makeHeader = function(string){
        const headContainer = document.createElement('div');
        headContainer.classList.add('head-container');

        menuContainer.appendChild(headContainer);

        const header = document.createElement('h1');
        header.textContent = string;

        headContainer.appendChild(header);

        return headContainer;
    };

//below is array and class that makes the menu items
    const _myDrinks = [];
    const _myDishes = [];
    const _myDesserts = [];

    class _MenuItems {
        constructor(name,image,description){
            this.name = name;
            this.image = image;
            this.description = description;
        }
    };

    const eeveeLatte = new _MenuItems('Eevee Latte', eeveeLatteIcon, 'A signature latte with a comforting flavor. Enjoy the cute latte art of Eevee! ');
    const liligantTea = new _MenuItems('Lilligant Floral Tea', liligantTeaIcon, 'Original blended tea. The soothing scent has calming benefits, just like the flower on Lilligants head.');
    const bunearyFrappe = new _MenuItems('Nutty Buneary Frappé ', bunearyFrappeIcon, 'A refreshing frappé with cookies shaped like Bunearys ears. The combination of the sweet cream and toasted nuts is superb.');
    const pachirisuFloat = new _MenuItems(`Poppin' Pachirisu Float`, pachirisuFloatIcon, `A soda float that's zappy like Pachirisu's electricity! Only a pro can top it off with even more ice cream.`);

    _myDrinks.push(eeveeLatte,liligantTea,bunearyFrappe,pachirisuFloat);

    function table(){
        console.table(_myDrinks);
    };

    const _makeDrinks = function(){
        const drinksContainer = document.createElement('div');
        drinksContainer.classList.add('menuItem-container');

        menuContainer.appendChild(drinksContainer);

        for(let obj of _myDrinks){
            const drinksCard = document.createElement('div');
            drinksCard.classList.add('menuItem-card');
            drinksContainer.appendChild(drinksCard);

            const textSection = document.createElement('div');
            textSection.classList.add('menuText-section');
            drinksCard.appendChild(textSection);

            const h1 = document.createElement('h1');
            h1.textContent = obj.name;
            textSection.appendChild(h1);

            const para = document.createElement('p');
            para.textContent = obj.description;
            textSection.appendChild(para);

            const img = document.createElement('img');
            img.src = obj.image;
            drinksCard.appendChild(img);
        }
    };

    const makeMenu = function(){
        Default.makeDefault();
        table();
        _makeHeader('DRINKS');
        _makeDrinks();
        _makeHeader('DISHES');
        _makeHeader('DESSERT');
    };

    return{
        makeMenu,
    };
})();

export {Menu};