import eeveeLatteIcon from './menu-items/eevee-latte.png';
import liligantTeaIcon from './menu-items/liligant-tea.png';
import bunearyFrappeIcon from './menu-items/buneary-frappe.png';
import pachirisuFloatIcon from './menu-items/pachirisu-float.png';
import swabluIceIcon from './menu-items/swablu-shaved-ice.png';
import vulpixSundaeIcon from './menu-items/vulpix-sundae.png';
import pikachuFlanIcon from './menu-items/pikachu-flan.png';
import ribombeeCakeIcon from './menu-items/ribombee-cake.png';
import snorlaxMocoIcon from './menu-items/snorlax-moco.png';
import pikachuCurryIcon from './menu-items/pikachu-curry.png';
import yamperPastaIcon from './menu-items/yamper-pasta.png';
import torchicOmuriceIcon from './menu-items/torchic-omurice.png';

const Menu = (function(){
    const _stepOne = function(){
        const mainContent = document.querySelector('.main-content');

        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
  
        mainContent.appendChild(menuContainer);
    };

    const _makeHeader = function(string){
        const menuContainer = document.querySelector('.menu-container');
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

    const snorlaxMoco = new _MenuItems(`Happy Snorlax Loco Moco `, snorlaxMocoIcon, `A satisfying loco moco that will put a smile on Snorlax's face. It even comes with a cup of soup!`);
    const pikachuCurry = new _MenuItems(`Piquant Pikachu Curry`, pikachuCurryIcon, `A vegetable-loaded curry with a kick to it. Enjoy a big plate and fuel your energy with Pikachu's smile.`);
    const yamperPasta = new _MenuItems(`Yummy Yamper Pasta`, yamperPastaIcon, `A pasta bolognese depicting a playful Yamper. This cute and yummy dish will surely delight your taste buds and heart!`);
    const torchicOmurice = new _MenuItems('Torchic Rice over Omelet', torchicOmuriceIcon, `Rice served atop an omelet as fluffy as Torchic's feathers. It goes well with ketchup!`);

    _myDishes.push(snorlaxMoco, pikachuCurry, yamperPasta, torchicOmurice);

    const swabluIce = new _MenuItems(`Swablu Shaved Ice`, swabluIceIcon,`Shaved ice shaped like a Swablu. Make sure you eat up before it melts!`);
    const vulpixSundae = new _MenuItems(`Burnt-Caramel Vulpix Sundae`, vulpixSundaeIcon,`A sweet and bitter dessert that depicts the cuteness and beauty of Vulpix. It tastes as good as it looks!`);
    const pikachuFlan = new _MenuItems(`Pikachu Fruit Flan`, pikachuFlanIcon,`A decadent fruit flan loaded with fruits. Pikachu's smile is too cute to share!`);
    const ribombeeCake = new _MenuItems(`Ribombee Chocolate Cake`, ribombeeCakeIcon,`An elegant bittersweet chocolate cake decorated with gold leaf. The Pollen Puff-like chocolate truffle simply melts in your mouth.`);

    _myDesserts.push(swabluIce, vulpixSundae, pikachuFlan, ribombeeCake);

//below is function that makes the menu based on name of array entered
    const _makeMenu = function(array){
        const menuContainer = document.querySelector('.menu-container');
        
        const menuItemContainer = document.createElement('div');
        menuItemContainer.classList.add('menuItem-container');

        menuContainer.appendChild(menuItemContainer);

        for(let obj of array){
            const menuItemCard = document.createElement('div');
            menuItemCard.classList.add('menuItem-card');
            menuItemContainer.appendChild(menuItemCard);

            const textSection = document.createElement('div');
            textSection.classList.add('menuText-section');
            menuItemCard.appendChild(textSection);

            const h1 = document.createElement('h1');
            h1.textContent = obj.name;
            textSection.appendChild(h1);

            const para = document.createElement('p');
            para.textContent = obj.description;
            textSection.appendChild(para);

            const img = document.createElement('img');
            img.src = obj.image;
            menuItemCard.appendChild(img);
        }
    };

    const makeMenu = function(){
        _stepOne();
        _makeHeader('DRINKS');
        _makeMenu(_myDrinks);
        _makeHeader('DISHES');
        _makeMenu(_myDishes);
        _makeHeader('DESSERT');
        _makeMenu(_myDesserts);
    };

    return{
        makeMenu,
    };
})();

export {Menu};