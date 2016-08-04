import {Personaje} from './beans/personaje';
import {Medusa} from './beans/medusa';
import {Atenea} from './beans/atenea';

export class Juego{

	private atacante: Personaje;

	private defensor: Personaje;

	private experienciaCombate: number;

	private puntosAta: number;

	private puntosDef: number;

	//solo vale si atacas mientras estas en el juego, en cuanto salgas, se pierden las bonificaciones
	private bonificacion: number;

	private distancia: number;

	constructor(){
		this.atacante = null;
		this.defensor = null;
		this.experienciaCombate = 0;
		this.puntosAta = 0;
		this.puntosDef = 0;
		this.bonificacion = 0;
		this.distancia = 0;
	}

	public setAtacante(ata:Personaje){
		this.atacante = ata;
	}

	public getAtacante():Personaje{
		return this.atacante;
	}

	public setDefensor(def:Personaje){
		this.defensor = def;
	}

	public getDefensor():Personaje{
		return this.defensor;
	}

	combate() {

		try{
			var diferenciaPuntos: number = 0;
			var diferenciaNivel: number = 0;
			var diferenciaDistancia: number = 0;
			var diferenciaSuerte: number = 0;

			this.puntosAta = this.atacante.ataquePrimario();
			this.puntosDef=this.atacante.defensaNormal();

			if (this.puntosAta>this.puntosDef){
				diferenciaPuntos = this.puntosAta-this.puntosDef;
			} else {
				diferenciaPuntos = this.puntosDef-this.puntosAta;
			}

			this.experienciaCombate = diferenciaPuntos;
		} catch (e) {
			alert(e);
		}
	}

	transformacion(){
		try{

			this.puntosAta=this.atacante.ataqueSecundario();
			this.puntosDef=this.atacante.defensaConversion();

			if (this .puntosAta>this.puntosDef){
			
			}else{
			
			}

		}catch(e){
			alert(e);
		}
	}

	busquedaRivalesoClasificacion(rival: boolean): Array<any> {

		let personajito = new Medusa(1, "medusa Luis", "Es una medusa muy bo nita", "fo ta zo ", 1, 2, 3, 4, 5, 6, 7, 8, 9);
		let defensor: Atenea = new Atenea(2, "medusa Luis", "Es una medusa muy bo nita", "fo ta zo ", 1, 2, 3, 4, 5, 6, 7, 8, 9);
		let atacante2: Personaje = new Medusa(3, "medusa Luis", "Es una medusa muy bo nita", "fo ta zo ", 1, 2, 3, 4, 5, 6, 7, 8, 9);
		let defensor2: Personaje = new Atenea(4, "medusa Luis", "Es una medusa muy bo nita", "fo ta zo ", 1, 2, 3, 4, 5, 6, 7, 8, 9);
		var datosSalida: Array<any> = new Array<any>();
		
		if (rival) {
			let mapaSalida: Map<string, any>= new Map<string,any>();
			mapaSalida.set("nombre", personajito.getNombre());
			mapaSalida.set("ultimoCombate", personajito.getUltimoCombate());
			mapaSalida.set("distancia", 300);
			datosSalida.push(mapaSalida);
			mapaSalida= new Map<string,any>();
			mapaSalida.set("nombre", atacante2.getNombre());
			mapaSalida.set("ultimoCombate", atacante2.getUltimoCombate());
			mapaSalida.set("distancia", 600);
			datosSalida.push(mapaSalida);
			mapaSalida= new Map<string,any>();
			mapaSalida.set("nombre", defensor2.getNombre());
			mapaSalida.set("ultimoCombate", defensor2.getUltimoCombate());
			mapaSalida.set("distancia", 4500);
			datosSalida.push(mapaSalida);
		} else {
			datosSalida.push(personajito);
			datosSalida.push(defensor);
			datosSalida.push(atacante2);
			datosSalida.push(defensor2);			
		}

		return datosSalida;
	}

}