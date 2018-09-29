import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariosListadosPage } from '../usuarios-listados/usuarios-listados';

@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html'
})
export class UsuariosPage {

  constructor(public navCtrl: NavController) {
  }
  goToUsuariosListados(params){
    if (!params) params = {};
    this.navCtrl.push(UsuariosListadosPage);
  }
}
