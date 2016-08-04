
export abstract class Personaje {

	private id: number;

	private nombre: string;

	private descripcion: string;

	private foto: string;

	private nivel: number;

	private experiencia: number;

	private latitud: number;

	private longitud: number;

	private velocidad: number;

	private esquivar: number;

	private distancia: number;

	private mana: number;

	private resistencia: number;

	private alma: number;

	private suerte: number;

	private ultimo_combate: Date;


	constructor() {
		this.id = 0;
		this.nombre = "";
		this.descripcion = "";
		this.foto = "";
		this.latitud = 0;
		this.longitud = 0;
		this.velocidad = 0;
		this.esquivar = 0;
		this.distancia = 0;
		this.mana = 0;
		this.resistencia = 0;
		this.alma = 0;
		this.suerte = 0;
		this.ultimo_combate = new Date();
	}

	public getId(): number {
		return this.id;
	}

	public setId(identificador: number) {
		this.id = identificador;
	}

	public getNombre(): string {
		return this.nombre;
	}

	public setNombre(nombre:string){
		this.nombre = nombre;
	}

	public getDescripcion()  : string{
		return this.descripcion;
	}

	public setDescripcion(descripcion:string){
		this.descripcion = descripcion;
	}

	public getFoto()  : string{
		return this.foto;
	}

	public setFoto(foto:string){
		this.foto = foto;
	}

	public getLatitud()  : number{
		return this.latitud;
	}

	public setLatitud(lat:number){
		this.latitud = lat;
	}

	public getLongitud()  : number{
		return this.longitud;
	}

	public setLongitud(lon:number){
		this.longitud = lon;
	}

	public getVelocidad()  : number{
		return this.velocidad;
	}

	public setVelocidad(velocidad:number){
		this.velocidad = velocidad;
	}

	public getEsquivar()  : number{
		return this.esquivar;
	}

	public setEsquivar(esquivar:number){
		this.esquivar = esquivar;
	}

	public getDistancia()  : number{
		return this.distancia;
	}

	public setDistancia(distancia:number){
		this.distancia = distancia;
	}

	public getMana()  : number{
		return this.mana;
	}

	public setMana(mana:number){
		this.mana = mana;
	}

	public getResistencia()  : number{
		return this.resistencia;
	}

	public setResitencia(resistencia:number){
		this.resistencia = resistencia;
	}

	public getAlma()  : number{
		return this.alma;
	}

	public setAlma(alma:number){
		this.alma = alma;
	}

	public getSuerte() : number{
		return this.suerte;
	}

	public setSuerte(suerte:number){
		this.suerte = suerte;
	}

	public getNivel() : number{
		return this.nivel;
	}

	public setNivel(nivel:number){
		this.nivel = nivel;
	}

	public getExperiencia(): number{
		return this.experiencia;
	}

	public setExperiencia(exp:number){
		this.experiencia = exp;
	}

	public getUltimoCombate() : Date{
		return this.ultimo_combate;
	}

	public setUltimoCombate(ulcom:Date){
		this.ultimo_combate = ulcom;
	}

	public abstract ataquePrimario();

	public abstract ataqueSecundario();

	public abstract defensaNormal();

	public abstract defensaConversion();
}