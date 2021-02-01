import menuList from '../data/menu.json';
import menuTemplate from '../templates/menu.hbs';

const ingredientsListRef = document.querySelector('.js-menu');

const markup = menuTemplate(menuList);

ingredientsListRef.insertAdjacentHTML('beforeend', markup);
