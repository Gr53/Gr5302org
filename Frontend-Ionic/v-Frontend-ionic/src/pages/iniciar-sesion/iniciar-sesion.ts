import { BienvenidoAdministradorPage } from './../bienvenido-administrador/bienvenido-administrador';
import { BienvenidoPage } from './../bienvenido/bienvenido';
import { BienvenidoJovenPage } from './../bienvenido-joven/bienvenido-joven';
import { CrearCuentaPage } from './../crear-cuenta/crear-cuenta';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-iniciar-sesion',
  templateUrl: 'iniciar-sesion.html'
})
export class IniciarSesionPage {

  constructor(public navCtrl: NavController) {
    
  }
  Ingresar(){
    
    //this.navCtrl.push(BienvenidoAdministradorPage);
    this.navCtrl.push(BienvenidoPage);
    //this.navCtrl.push(BienvenidoJovenPage);
  }

  Registro(){
    this.navCtrl.push(CrearCuentaPage);
  }
  
}
