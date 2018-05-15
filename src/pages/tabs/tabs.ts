import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CalculatorPage } from '../calculator/calculator'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  calculatorTab = CalculatorPage;
  aboutTab = AboutPage;

  constructor() {

  }
}
