import './style.css';
import takoTacoI from './takoTacos.jpeg';
import takoyakiI from './takoyaki.jpeg';
import cookieI from './cookie.jpeg';

function menuPage() {
    const element = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');
    menuTitle.innerHTML = "Menu";

    const takoTacos = document.createElement('div');
    takoTacos.classList.add('menuItem');
    const takoTacoHeader = document.createElement('div');
    takoTacoHeader.classList.add('menuHeader');
    takoTacoHeader.innerHTML = "Tako Tacos";
    const takoTacosText = document.createElement('div');
    takoTacosText.classList.add('menuText');
    takoTacosText.innerHTML = "Delectably delicious tacos made with only the freshest takos.";
    const takoTacoImage = new Image();
    takoTacoImage.src = takoTacoI;
    takoTacoImage.classList.add("menuImg");

    takoTacos.appendChild(takoTacoHeader);
    takoTacos.appendChild(takoTacosText);
    takoTacos.appendChild(takoTacoImage);

    const takoyaki = document.createElement('div');
    takoyaki.classList.add('menuItem');
    const takoyakiHeader = document.createElement('div');
    takoyakiHeader.classList.add('menuHeader');
    takoyakiHeader.innerHTML = "Takoyaki";
    const takoyakiText = document.createElement('div');
    takoyakiText.classList.add('menuText');
    takoyakiText.innerHTML = "Eight warm takoyaki balls made with locally sourced takos.";
    const takoyakiImage = new Image();
    takoyakiImage.src = takoyakiI;
    takoyakiImage.classList.add("menuImg");

    takoyaki.appendChild(takoyakiHeader);
    takoyaki.appendChild(takoyakiText);
    takoyaki.appendChild(takoyakiImage);

    const cookies = document.createElement('div');
    cookies.classList.add('menuItem');
    const cookieHeader = document.createElement('div');
    cookieHeader.classList.add('menuHeader');
    cookieHeader.innerHTML = "Cookies";
    const cookieText = document.createElement('div');
    cookieText.classList.add('menuText');
    cookieText.innerHTML = "Scrumptious chocolate chip cookies perfectly crafted from the void.";
    const cookieImage = new Image();
    cookieImage.src = cookieI;
    cookieImage.classList.add("menuImg");

    cookies.appendChild(cookieHeader);
    cookies.appendChild(cookieText);
    cookies.appendChild(cookieImage);

    menu.appendChild(takoTacos);
    menu.appendChild(takoyaki);
    menu.appendChild(cookies);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML= 'Copyright Information';

    element.appendChild(menu);
    element.appendChild(footer);

    return element;
}

export default menuPage;