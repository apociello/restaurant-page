import "./style.css"
import {homePage} from "./pages/home/homePage.js";
import {menuPage} from "./pages/menu/menuPage.js";
import {contactPage} from "./pages/contact/contactPage.js";

const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

homeBtn.addEventListener('click', () => {
    contentDiv.textContent = '';
    homePage()
})

menuBtn.addEventListener('click', () => {
    contentDiv.textContent = '';
    menuPage()
})

contactBtn.addEventListener('click', () => {
    contentDiv.textContent = '';
    contactPage()
})

homePage()