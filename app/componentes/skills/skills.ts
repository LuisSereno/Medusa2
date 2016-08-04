import {Component,Input} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';
 
@Component({
  selector: 'skills',
  templateUrl: 'build/componentes/skills/skills.html',
  directives: [IONIC_DIRECTIVES] // makes all Ionic directives available to your component
})
export class Skills {


  @Input("tipo") datoNumber: number;

  @Input() cantidad: string;

  range: Array<number>= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

  VELOCIDAD = 1;

  ESQUIVAR = 2;

  DISTANCIA = 3;

  MANA = 4;
 
  RESISTENCIA = 5;

  ALMA = 6;

  SUERTE = 7;

constructor() {
}

}