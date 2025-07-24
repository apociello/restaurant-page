function homePage() {
    const title = document.createElement('h1');
    title.textContent = 'Grillzilla';

    const intro = document.createElement('p');
    intro.textContent = 'Welcome to Grillzilla, where the flames are wild and the flavors are unleashed! We’re a beast of a kitchen serving monstrous burgers, legendary grills, and sides that bite back. Come hungry — leave like a hero who just survived a flavor rampage.'

    const content = document.getElementById('content');
    content.append(title, intro, image)
}

export {homePage}