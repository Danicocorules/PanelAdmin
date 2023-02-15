import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private tema = document.querySelector('#theme');


  constructor() {
    const chargedTheme = localStorage.getItem('Theme') || `./assets/css/colors/purple-dark.css`;
    this.tema!.setAttribute('href', chargedTheme)
  }

  changeTheme(theme:string) {

    const newUrl = `./assets/css/colors/${theme}.css`;
    this.tema!.setAttribute('href', newUrl);
    localStorage.setItem('Theme', newUrl);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');
    const UrlActual = this.tema!.getAttribute('href');

    links.forEach( elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      if (UrlActual === btnThemeUrl) {
        elem.classList.add('working');
      }
     })
  }

}
