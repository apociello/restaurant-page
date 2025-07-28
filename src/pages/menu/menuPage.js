import "./menu.css"

function menuPage(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');

    const section1 = document.createElement('div');
    section1.classList.add('sec1');
    section1.textContent = 'Coffee & Espresso';

    const section2 = document.createElement('div');
    section2.classList.add('sec2');
    section2.textContent = 'Tea & Others';

    const section3 = document.createElement('div');
    section3.classList.add('sec3');
    section3.textContent = 'Bakes & Treats';

    const section4 = document.createElement('div');
    section4.classList.add('sec4');
    section4.textContent = 'Extras'

    menuDiv.append(section1, section2, section3, section4)
    const content = document.getElementById('content');
    content.append(menuDiv)
}

export {menuPage}