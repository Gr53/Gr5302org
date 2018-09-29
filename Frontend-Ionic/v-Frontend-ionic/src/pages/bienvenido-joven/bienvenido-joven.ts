import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosPersonalesJovenesPage } from '../datos-personales-jovenes/datos-personales-jovenes';

@Component({
  selector: 'page-bienvenido-joven',
  templateUrl: 'bienvenido-joven.html'
})
export class BienvenidoJovenPage {

  constructor(public navCtrl: NavController) {
  }
  goToDatosPersonalesJovenes(params){
    if (!params) params = {};
    this.navCtrl.push(DatosPersonalesJovenesPage);
  }goToBienvenidoJoven(params){
    if (!params) params = {};
    this.navCtrl.push(BienvenidoJovenPage);
  }
}
