import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';
import clearPage from './clearPage';
import './style.css';

function pageLoad() {
    const element = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const list = document.createElement('ul');
    list.classList.add("headerList");
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

    document.body.insertBefore(header, document.body.firstChild);
}
pageLoad();
homePage();

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

home.addEventListener("click", () => {
    clearPage();
    homePage();
});

menu.addEventListener("click", () => {
    clearPage();
    menuPage();
});

contact.addEventListener("click", () => {
    clearPage();
    contactPage();
});