import "./home.css"
import image from "./coffee&study.jpg"

function homePage() {
    const intro = document.createElement('p');
    intro.textContent = 'Sip. Think. Unwind.';
    intro.classList.add('intro');

    const img = document.createElement('img');
    img.src = image;
    img.classList.add('img')

    const openingHours = document.createElement('div')
    openingHours.classList.add('openingHours')

    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Opening Hours';

    const hours = document.createElement('p');
    hours.innerHTML = 'Monday / Friday: 8:00 AM - 7:00 PM<br>Saturday / Sunday: 9:00 AM - 6:00 PM';

    openingHours.append(hoursTitle, hours)

    const content = document.getElementById('content');
    content.append(intro, img, openingHours)
}

export {homePage}