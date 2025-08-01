import "./contact.css"
import image from "./coffeeMap.png"

function contactPage(){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div')

    const address = document.createElement('p');
    address.textContent = '📍 257 Hamilton Avenue, Palo Alto, CA 94301'

    const img = document.createElement('img');
    img.src = image;
    img.classList.add('image')

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 +1 (650) 555-1234';

    const email = document.createElement('p');
    email.textContent = '📧 hello@quietcup.com';
    
    contactDiv.append(address, img, phoneNumber, email)
    const content = document.getElementById('content');
    content.append(contactDiv)
}

export {contactPage}