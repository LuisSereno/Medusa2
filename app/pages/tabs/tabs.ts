import {Page} from 'ionic-angular';
import {Page1} from '../personaje/page1';
import {Page2} from '../acciones/page2';
import {Page3} from '../clasificacion/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Page1;
  tab2Root: any = Page2;
  tab3Root: any = Page3;
}
