import './style.css';
import takodachiI from 'takodachi.jpeg';

function contactPage() {
    const element = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.classList('contact');

    const contactTitle = document.createElement('div');
    contactTitle.classList.add('contactItem');
    contactTitle.classList.add('contactTitle');
    contactTitle.innerHTML = "Contact Us";

    const takodachi = document.createElement('div');
    takodachi.classList.add('contactItem');
    const takodachiHeader = document.createElement('div');
    takodachiHeader.classList.add('contactHeader');
    takodachiHeader.innerHTML = "Takodachis";
    const takodachiList = document.createElement('ul');
    const takodachiTitle = document.createElement('li');
    takodachiTitle.innerHTML = "The Whole Team";
    const takodachiPhone = document.createElement('li');
    takodachiPhone.innerHTML = "000-000-0000";
    const takodachiEmail = document.createElement('li');
    takodachiEmail.innerHTML = "fromTheVoid@fake.com";
    takodachiList.appendChild(takodachiTitle);
    takodachiList.appendChild(takodachiPhone);
    takodachiList.appendChild(takodachiEmail);
    const takodachiImage = new Image();
    takodachiImage.src = takodachiI;

    takodachi.appendChild(takodachiHeader);
    takodachi.appendChild(takodachiList);
    takodachi.appendChild(takodachiImage);

    contact.appendChild(contactTitle);
    contact.appendChild(takodachi);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML= 'Copyright Information';

    element.appendChild(contact);
    element.appendChild(footer);

    return element;
}

export default contactPage;