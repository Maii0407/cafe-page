import imgContent from './battle-cafe.png';

const Home = (function(){
    

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

   

    
        
    return{
        
    };

})();

export {Home};