import {Personaje} from './personaje';

export class Atenea extends Personaje {

	constructor(id:number,nombre:string,descripcion:string,foto:string,latitud:number,longitud:number,velocidad:number,
		esquivar:number,distancia:number,mana:number,resistencia:number,alma:number,suerte:number){
		super();
		this.setId(id);
		this.setNombre(nombre);
		this.setDescripcion(descripcion);
		this.setFoto(foto);
		this.setLatitud(latitud);
		this.setLongitud(longitud);
		this.setVelocidad(velocidad);
		this.setEsquivar(esquivar);
		this.setDistancia(distancia);
		this.setMana(mana);
		this.setResitencia(resistencia);
		this.setAlma(alma);
		this.setSuerte(suerte);
	}

	public ataquePrimario() {
		return "LuiseteAte";
	}

	public ataqueSecundario() {
		return "ManoleteAte"
	}

	public defensaNormal() {
		return "luisitoAte";
	}

	public defensaConversion() {
		return "angelitoAte";
	}
}