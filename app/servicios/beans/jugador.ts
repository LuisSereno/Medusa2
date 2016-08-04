import {Personaje} from './personaje';

export class Jugador {

	private id: number;
	
	private nombre: string;

	private email: string;

	private personajePrincipal: Personaje;

	private personajesSecundarios: Array<Personaje>;

	constructor(){
		this.id = 0;
		this.nombre = "";
		this.email = "";
		this.personajePrincipal = null;
		this.personajesSecundarios = null;
	}

	construir(identificador:number,nombre:string,email:string,personajeprin:Personaje,personajesSecun:Array<Personaje>) {
		this.id = identificador;
		this.nombre = nombre;
		this.email = email;
		this.personajePrincipal = personajeprin;
		this.personajesSecundarios = personajesSecun;
	}

	public getId(): number{
		return this.id;
	}

	public setId(id:number){
		this.id = id;
	}

	public getNombre():string{
		return this.nombre;
	}

	public setNombre(nombre:string){
		this.nombre = nombre;
	}

	public getEmail():string{
		return this.email;
	}

	public setEmail(email:string){
		this.email = email;
	}
	public getPersonajePrincipal():Personaje{
		return this.personajePrincipal;
	}

	public setPersonajePrincipal(personaje:Personaje){
		this.personajePrincipal = personaje;
	}
	public getPersonajesSecundarios():Array<Personaje>{
		return this.personajesSecundarios;
	}

	public setPersponajesSecundarios(personajesSecun:Array<Personaje>){
		this.personajesSecundarios = personajesSecun;
	}
}