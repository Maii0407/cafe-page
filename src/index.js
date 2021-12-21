import './style.css';
import { Default } from './default';
import { Home } from './home';
import {Contact} from './contact.js'

/*
const Website = (function(){
    let pokemonCafe = 'home';

    let homeBtn = document.getElementById('HOME');
    let menuBtn = document.getElementById('MENU');
    let contactBtn = document.getElementById('CONTACT');

    homeBtn.addEventListener('click', function(){
        pokemonCafe = 'home';
    });

    contactBtn.addEventListener('click', function(){
        pokemonCafe = 'contact';
    });

    if(pokemonCafe === 'home'){
        Home.makeHome();
    } else if(pokemonCafe === 'contact'){
        Contact.makeContact();
    } else{
        return;
    };
})(); */
//Home.makeHome();
Contact.makeContact();