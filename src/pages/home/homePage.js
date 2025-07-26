import "./home.css"
import image from "./coffee&study.jpg"

function homePage() {
    const intro = document.createElement('p');
    intro.textContent = 'A cozy haven for coffee lovers and deep thinkers'
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('img')

    const content = document.getElementById('content');
    content.append(intro, img)
}

export {homePage}