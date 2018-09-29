import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SitiosListadosPage } from '../sitios-listados/sitios-listados';

@Component({
  selector: 'page-centro-reciclaje',
  templateUrl: 'centro-reciclaje.html'
})
export class CentroReciclajePage {

  constructor(public navCtrl: NavController) {
  }
  goToSitiosListados(params){
    if (!params) params = {};
    this.navCtrl.push(SitiosListadosPage);
  }
}
