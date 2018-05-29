import { Component } from '@angular/core';

import { AboutPage } from '../Kontakt/about';
import { ContactPage } from '../Speisekarte/contact';
import { HomePage } from '../Home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = ContactPage;


  constructor() {

  }
}
