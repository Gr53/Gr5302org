import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BienvenidoJovenPage } from '../bienvenido-joven/bienvenido-joven';

@Component({
  selector: 'page-datos-personales-jovenes',
  templateUrl: 'datos-personales-jovenes.html'
})
export class DatosPersonalesJovenesPage {

  constructor(public navCtrl: NavController) {
  }
  goToBienvenidoJoven(params){
    if (!params) params = {};
    this.navCtrl.push(BienvenidoJovenPage);
  }goToDatosPersonalesJovenes(params){
    if (!params) params = {};
    this.navCtrl.push(DatosPersonalesJovenesPage);
  }
}
