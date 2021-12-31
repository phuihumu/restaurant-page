import image from './takoeats.jpeg';
import './style.css';

function homePage() {
    const element = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const list = document.createElement('ul');
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
    homeTab.id = 'home';
    homeTab.innerHTML = "Home";
    menuTab.id = 'menu';
    menuTab.innerHTML = "Menu";
    contactTab.id = 'contact';
    contactTab.innerHTML = "Contact";
    list.appendChild(homeTab);
    list.appendChild(menuTab);
    list.appendChild(contactTab);
    tabs.appendChild(list);
    header.appendChild(tabs);

    const middle = document.createElement('div');
    middle.classList.add('middle');
    const banner = new Image();
    banner.src = image;
    const desc = document.createElement('div');
    desc.classList.add('description');
    desc.innerHTML = 'TakoEats serves the most delectable, finest goods.';
    middle.appendChild(banner);
    middle.appendChild(desc);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML= 'Copyright Information';

    element.appendChild(header);
    element.appendChild(middle);
    element.appendChild(footer);

    return element;
}

export default homePage;