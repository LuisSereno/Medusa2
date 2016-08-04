import {Page} from 'ionic-angular';
import {Personaje} from '../../servicios/beans/personaje'
import {Medusa} from '../../servicios/beans/medusa'
import {Atenea} from '../../servicios/beans/atenea'


@Page({
  templateUrl: 'build/pages/clasificacion/page3.html'
})
export class Page3 {

	//Este valor dependera de lo que seas tu, asi se te mostrara el primero
	tipoMostrado: string = "medusas";

	arrayMedusas: Array<Personaje>;

	arrayAteneas: Array<Personaje>;

  	constructor() {

		let personajito:Personaje = new Medusa(1,"medusa Luis","Es una medusa muy bo nita","fo ta zo ", 1, 2, 3, 4, 5, 6,7,8,9);
		let defensor:Personaje = new Medusa(2,"medusa Antonio","Es una medusa muy bo nita","fo ta zo ", 1, 2, 3, 4, 5, 6,7,8,9);
		let atacante2:Personaje = new Atenea(3,"medusa Manuel","Es una medusa muy bo nita","fo ta zo ", 1, 2, 3, 4, 5, 6,7,8,9);
		let defensor2:Personaje = new Atenea(4,"medusa Angel","Es una medusa muy bo nita","fo ta zo ", 1, 2, 3, 4, 5, 6,7,8,9);

		this.arrayAteneas=[personajito,defensor];
		this.arrayMedusas=[atacante2,defensor2];
	}
}
