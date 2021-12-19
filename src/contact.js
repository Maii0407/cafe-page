import { Home } from "./home";
import CafeMasterImg from './VSCafé_Master.png';


const Contact = (function(){
    const content = document.getElementById('content');

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

    //this makes the contacts us content
    const _createContactUs = function(){
        //this makes the container for the cafe master cards
        const CUcon = document.createElement('div');
        CUcon.classList.add('contactUs-container');

        content.appendChild(CUcon);
        
        //this section makes the header
        const headContainer = document.createElement('div');
        headContainer.classList.add('CUheader-container');

        CUcon.appendChild(headContainer);

        const CUheader = document.createElement('div');
        CUheader.classList.add('contactUs-header');
        CUheader.textContent = `Contact Us`;

        headContainer.appendChild(CUheader);

        //this section generates the cafe master cards based on mycafemasters array
        for(let obj of _myCafeMasters){
            let cmCard = document.createElement('div');
            cmCard.classList.add('cafeMaster-card');

            CUcon.appendChild(cmCard);

            let cmCardHead = document.createElement('h1');
            cmCardHead.textContent = obj.name;
            cmCard.appendChild(cmCardHead);

            let para1 = document.createElement('p');
            let para2 =document.createElement('p');
            let para3 = document.createElement('p');

            para1.textContent = `${obj.branch} Branch ${obj.position}`;
            para2.textContent = obj.phone;
            para3.textContent = obj.email;

            cmCard.appendChild(para1);
            cmCard.appendChild(para2);
            cmCard.appendChild(para3);
        }

        return CUcon;
    }

    //this section makes the contact tabs of the website
    const createContact = function(){
        Home.createDefault();
        _createContactUs();
    };


    return{
        createContact,
    };
})();

export {Contact};