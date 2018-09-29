import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SitiosListadosPage } from '../sitios-listados/sitios-listados';

@Component({
  selector: 'page-sitios-de-acopio',
  templateUrl: 'sitios-de-acopio.html'
})
export class SitiosDeAcopioPage {

  constructor(public navCtrl: NavController) {
  }
  goToSitiosListados(params){
    if (!params) params = {};
    this.navCtrl.push(SitiosListadosPage);
  }
}
