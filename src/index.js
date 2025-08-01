import "./style.css"
import {homePage} from "./pages/home/homePage.js";
import {menuPage} from "./pages/menu/menuPage.js";
import {contactPage} from "./pages/contact/contactPage.js";

const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

homeBtn.addEventListener('click', () => {
    homeBtn.style.borderBottom = '2px solid snow';
    menuBtn.style.borderBottom = 'none';
    contactBtn.style.borderBottom = 'none';
    
    contentDiv.textContent = '';
    homePage()
})

menuBtn.addEventListener('click', () => {
    homeBtn.style.borderBottom = 'none';
    menuBtn.style.borderBottom = '2px solid snow';
    contactBtn.style.borderBottom = 'none';

    contentDiv.textContent = '';
    menuPage()
})

contactBtn.addEventListener('click', () => {
    homeBtn.style.borderBottom = 'none';
    menuBtn.style.borderBottom = 'none';
    contactBtn.style.borderBottom = '2px solid snow';

    contentDiv.textContent = '';
    contactPage()
})

homePage()
homeBtn.style.borderBottom = "2px solid snow"