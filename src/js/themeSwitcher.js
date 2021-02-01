const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const switcher = document.querySelector('#theme-switch-toggle');
const themeStorageValue = localStorage.getItem('theme');

isThemeStorage();

switcher.addEventListener('change', themeChecker);

function themeChecker() {
  switcher.checked ? darkMode() : lightMode();
}

function isThemeStorage() {
  themeStorageValue === 'Theme.DARK' ? darkMode() : lightMode();
}

function darkMode() {
  switcher.checked = true;
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', 'Theme.DARK');
}

function lightMode() {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', 'Theme.LIGHT');
}
