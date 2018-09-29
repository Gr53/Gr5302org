import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BienvenidoPage } from '../bienvenido/bienvenido';
import { DatosPersonalesAdminPage } from '../datos-personales-admin/datos-personales-admin';
import { SitiosDeAcopioPage } from '../sitios-de-acopio/sitios-de-acopio';
import { SitiosListadosPage } from '../sitios-listados/sitios-listados';
import { UsuariosPage } from '../usuarios/usuarios';
import { UsuariosListadosPage } from '../usuarios-listados/usuarios-listados';
import { RolesDeUsuarioPage } from '../roles-de-usuario/roles-de-usuario';
import { TipoMaterialPage } from '../tipo-material/tipo-material';
import { MaterialPage } from '../material/material';
import { TipoMultimediaPage } from '../tipo-multimedia/tipo-multimedia';
import { MultimediaPage } from '../multimedia/multimedia';

@Component({
  selector: 'page-bienvenido-admin',
  templateUrl: 'bienvenido-admin.html'
})
export class BienvenidoAdminPage {

  constructor(public navCtrl: NavController) {
  }
  goToBienvenido(params){
    if (!params) params = {};
    this.navCtrl.push(BienvenidoPage);
  }goToDatosPersonalesAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(DatosPersonalesAdminPage);
  }goToBienvenidoAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(BienvenidoAdminPage);
  }goToSitiosDeAcopio(params){
    if (!params) params = {};
    this.navCtrl.push(SitiosDeAcopioPage);
  }goToSitiosListados(params){
    if (!params) params = {};
    this.navCtrl.push(SitiosListadosPage);
  }goToUsuarios(params){
    if (!params) params = {};
    this.navCtrl.push(UsuariosPage);
  }goToUsuariosListados(params){
    if (!params) params = {};
    this.navCtrl.push(UsuariosListadosPage);
  }goToRolesDeUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(RolesDeUsuarioPage);
  }goToTipoMaterial(params){
    if (!params) params = {};
    this.navCtrl.push(TipoMaterialPage);
  }goToMaterial(params){
    if (!params) params = {};
    this.navCtrl.push(MaterialPage);
  }goToTipoMultimedia(params){
    if (!params) params = {};
    this.navCtrl.push(TipoMultimediaPage);
  }goToMultimedia(params){
    if (!params) params = {};
    this.navCtrl.push(MultimediaPage);
  }
}
