import imgContent from './battle-cafe.png';
import { Default } from './default';

const Home = (function(){
    const mainContent = document.querySelector('.main-content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    mainContent.appendChild(homeContainer);

    const _insertMainImg = function(){
        const mainImg = new Image();
        mainImg.src = imgContent;
        mainImg.classList.add('main-img');

        homeContainer.appendChild(mainImg);

        return mainImg;
    };

    const _insertText = function(){
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        homeContainer.appendChild(textContainer);

        const mainText = document.createElement('p');
        mainText.textContent = `The Pokémon Café is a chain of coffee shops located throughout the 
        Galar Region. Customers can visit to enjoy a variety of our products. The Pokémon Café's 
        design is based on UK's popular coffee shops, Costa Coffee.`

        textContainer.appendChild(mainText);

        return textContainer;
    };

    const makeHome = function(){
        Default.makeDefault();
        _insertMainImg();
        _insertText();
    };
      
    return{
        makeHome,
    };

})();

export {Home};