import {Page, NavController} from 'ionic-angular';
import {Busqueda} from '../busqueda/busqueda'


@Page({
  templateUrl: 'build/pages/acciones/page2.html',
})
export class Page2 {
	constructor(private nav: NavController) {

	}

	cargarBusquedaDatos() {
	    console.log("Carga Busqueda");
	    //this.nav.setRoot(Page3);
		this.nav.push(Busqueda);
	}
}
