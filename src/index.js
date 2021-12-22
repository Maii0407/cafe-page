import './style.css';
import { Default } from './default';
import { Home } from './home';
import {Contact} from './contact.js';
import { Menu } from './menu';

const CafePage = (function(){
    Default.makeDefault();
    Home.makeHome();

    const homeBtn = document.getElementById('HOME');
    const menuBtn = document.getElementById('MENU');
    const contactBtn = document.getElementById('CONTACT');

    homeBtn.addEventListener('click', function(){
        document.querySelector('.main-content').innerHTML = '';
        Home.makeHome();
    });

    menuBtn.addEventListener('click', function(){
        document.querySelector('.main-content').innerHTML = '';
        Menu.makeMenu();
    });

    contactBtn.addEventListener('click', function(){
        document.querySelector('.main-content').innerHTML = '';
        Contact.makeContact();
    });
    
})();