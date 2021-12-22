import CafeMasterImg from './VSCafé_Master.png';


const Contact = (function(){

    const _stepOne = function(){
        const mainContent = document.querySelector('.main-content');

        const contactContainer = document.createElement('div');
        contactContainer.classList.add('contact-container');

        mainContent.appendChild(contactContainer);
    };

//this section is the array and constructor for the cafe masters
    const _myCafeMasters = [];

    class _CafeMaster {
        constructor(name,position,branch,phone,email){
            this.name = name;
            this.position = position;
            this.branch = branch;
            this.phone = phone;
            this.email = email;
        }
    };

    const dwight = new _CafeMaster('Dwight', 'Café Master', 'Mototoske', '010-000 1920', 'dwight@pkmn.com');
    const bernard = new _CafeMaster('Bernard', 'Café Master', 'Hammerlocke', '010-000 4440', 'bernard@pkmn.com');
    const richard = new _CafeMaster('Richard', 'Café Master', 'Wyndon', '010-000 7520', 'richard@pkmn.com');

    _myCafeMasters.push(dwight, bernard, richard);

//function below makes the header of contact us tab 
    const _makeHeader = function(){
        const contactContainer = document.querySelector('.contact-container');

        const headContainer = document.createElement('div');
        headContainer.classList.add('head-container');

        contactContainer.appendChild(headContainer);

        const contactHeader = document.createElement('h1');
        contactHeader.textContent = `CONTACT US`;

        headContainer.appendChild(contactHeader);

        return headContainer;
    };

    const _makeMasterCards = function(){
        const contactContainer = document.querySelector('.contact-container');

        for(let obj of _myCafeMasters){
            //makes the cafe master card container
            let cardContainer = document.createElement('div');
            cardContainer.classList.add('card-container');

            contactContainer.appendChild(cardContainer);

            //makes the text container inside the card container
            let cardTextContainer = document.createElement('div');
            cardTextContainer.classList.add('cardText-container');

            cardContainer.appendChild(cardTextContainer);

            let cardTextHeader = document.createElement('h1');
            cardTextHeader.textContent = obj.name;

            cardTextContainer.appendChild(cardTextHeader);

            let para1 = document.createElement('p');
            let para2 =document.createElement('p');
            let para3 = document.createElement('p');

            para1.textContent = `${obj.branch} Branch ${obj.position}`;
            para2.textContent = obj.phone;
            para3.textContent = obj.email;

            cardTextContainer.appendChild(para1);
            cardTextContainer.appendChild(para2);
            cardTextContainer.appendChild(para3);
            

            //makes the img container inside the card container
            let cardImgContainer = document.createElement('div');
            cardImgContainer.classList.add('cardImg-container');

            cardContainer.appendChild(cardImgContainer);

            let masterImg = new Image();
            masterImg.src = CafeMasterImg;
            masterImg.classList.add('master-image');

            cardImgContainer.appendChild(masterImg);
        }
    };

    //this section makes the contact tabs of the website
    const makeContact = function(){
        _stepOne();
        _makeHeader();
        _makeMasterCards();
    };


    return{
        makeContact,
    };
})();

export {Contact};