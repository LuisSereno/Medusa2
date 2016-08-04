import {Page} from 'ionic-angular';
import {Skills} from '../../componentes/skills/skills'
import {Medusa} from '../../servicios/beans/medusa'
import {Atenea} from '../../servicios/beans/atenea'
import {Personaje} from '../../servicios/beans/personaje'
import {Jugador} from '../../servicios/beans/jugador'


@Page({
	templateUrl: 'build/pages/personaje/page1.html',
  directives: [Skills]
})
export class Page1 {
	
	personajito: Personaje;

	constructor(private _jugador: Jugador) {
		let arrayAux: Array< Personaje >= [new Atenea(2, "medusa Luis", "Es una medusa muy bo nita", "fo ta zo ", 1, 2, 3, 4, 5, 6, 7, 8, 9),
			new Medusa(3, "medusa Luis", "Es una medusa muy bo nita", "fo ta zo ", 1, 2, 3, 4, 5, 6, 7, 8, 9),
			new Atenea(4, "medusa Luis", "Es una medusa muy bo nita", "fo ta zo ", 1, 2, 3, 4, 5, 6, 7, 8, 9)];
		
		_jugador.construir(343, "luisserenofcb@hotmail.com", "Luison",
		new Medusa(1,"medusa Luis","Es una medusa muy bo nita","fo ta zo ", 1, 2, 3, 4, 5, 6,7,8,9),
		arrayAux);
		
		this.personajito=_jugador.getPersonajePrincipal();

//		this.personajito = new Medusa(1, "medusa Luis", "Es una medusa muy bo nita", "fo ta zo ", 1, 2, 3, 4, 5, 6,7,8,9);
//		var defensor:Atenea = new Atenea(2,"medusa Luis","Es una medusa muy bo nita","fo ta zo ", 1, 2, 3, 4, 5, 6,7,8,9);
//		var atacante2:Personaje = new Medusa(3,"medusa Luis","Es una medusa muy bo nita","fo ta zo ", 1, 2, 3, 4, 5, 6,7,8,9);
//		var defensor2:Personaje = new Atenea(4,"medusa Luis","Es una medusa muy bo nita","fo ta zo ", 1, 2, 3, 4, 5, 6,7,8,9);
	}
}
