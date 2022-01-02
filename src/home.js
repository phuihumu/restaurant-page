import image from './takoeats.jpeg';
import './style.css';

function homePage() {
    const element = document.querySelector('#content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home');

    const middle = document.createElement('div');
    middle.classList.add('middle');
    const banner = new Image();
    banner.src = image;
    const desc = document.createElement('div');
    desc.classList.add('description');
    desc.innerHTML = 'TakoEats serves the most delectable, finest goods.';
    middle.appendChild(banner);
    middle.appendChild(desc);

    homeContainer.appendChild(middle);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML= 'Copyright Information';

    element.appendChild(homeContainer);
    element.appendChild(footer);

    return element;
}

export default homePage;