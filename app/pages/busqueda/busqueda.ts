import {Page, NavController} from 'ionic-angular';
import {Juego} from '../../servicios/juego'
import {Jugador} from '../../servicios/beans/jugador'

@Page({
	templateUrl: 'build/pages/busqueda/busqueda.html'
})
export class Busqueda {

	arrayBusqueda: Array<Map<string, any>>;

	constructor(private nav: NavController,private _juego: Juego, private _jugador: Jugador) {
		
		this.arrayBusqueda = new Array<Map<string, any>>();
		
		_juego.setAtacante(_jugador.getPersonajePrincipal());
		var arrayDevuelto:Array<Map<string,any>>=_juego.busquedaRivalesoClasificacion(true);

		for (let dat of arrayDevuelto){
			let mapita : Map<string, any>= new Map<string,any>();
			mapita.set("nombre",dat.get("nombre"));
			mapita.set("ultimoCombate", dat.get("ultimoCombate"));
			mapita.set("distancia", dat.get("distancia"));
			this.arrayBusqueda.push(mapita);
		}
	}
}
