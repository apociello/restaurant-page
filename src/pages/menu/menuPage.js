import "./menu.css"

function menuPage(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv')

    const content = document.getElementById('content');
    content.append(menuDiv)
}

export {menuPage}