import "./home.css"

function homePage() {
    const title = document.createElement('h1');
    title.textContent = 'Quiet Cup';

    const intro = document.createElement('p');
    intro.textContent = 'A refined space where exceptional coffee meets a tranquil atmosphere. Ideal for focused work, thoughtful reading, or peaceful relaxation.'

    const content = document.getElementById('content');
    content.append(title, intro)
}

export {homePage}