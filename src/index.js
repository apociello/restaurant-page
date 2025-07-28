import "./style.css"
import {homePage} from "./pages/home/homePage.js"
console.log('Hello World!')

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
})

contactBtn.addEventListener('click', () => {
    contentDiv.textContent = '';
})