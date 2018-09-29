import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariosListadosPage } from '../usuarios-listados/usuarios-listados';
import { BienvenidoPage } from '../bienvenido/bienvenido';
import { SitiosListadosPage } from '../sitios-listados/sitios-listados';
import { TipoMaterialPage } from '../tipo-material/tipo-material';
import { MaterialPage } from '../material/material';
import { TipoMultimediaPage } from '../tipo-multimedia/tipo-multimedia';
import { MultimediaPage } from '../multimedia/multimedia';
import { RolesDeUsuarioPage } from '../roles-de-usuario/roles-de-usuario';
import { UsuariosPage } from '../usuarios/usuarios';
import { SitiosDeAcopioPage } from '../sitios-de-acopio/sitios-de-acopio';
import { DatosPersonalesAdminPage } from '../datos-personales-admin/datos-personales-admin';
import { BienvenidoAdminPage } from '../bienvenido-admin/bienvenido-admin';

@Component({
  selector: 'page-bienvenido-administrador',
  templateUrl: 'bienvenido-administrador.html'
})
export class BienvenidoAdministradorPage {

  tab1Root: any = RolesDeUsuarioPage;
  tab2Root: any = UsuariosPage;
  tab3Root: any = SitiosDeAcopioPage;
  tab4Root: any = DatosPersonalesAdminPage;
  tab5Root: any = BienvenidoAdminPage;
  constructor(public navCtrl: NavController) {
  }
  goToRolesDeUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(RolesDeUsuarioPage);
  }goToUsuarios(params){
    if (!params) params = {};
    this.navCtrl.push(UsuariosPage);
  }goToUsuariosListados(params){
    if (!params) params = {};
    this.navCtrl.push(UsuariosListadosPage);
  }goToDatosPersonalesAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(DatosPersonalesAdminPage);
  }goToBienvenidoAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(BienvenidoAdminPage);
  }goToBienvenido(params){
    if (!params) params = {};
    this.navCtrl.push(BienvenidoPage);
  }goToSitiosDeAcopio(params){
    if (!params) params = {};
    this.navCtrl.push(SitiosDeAcopioPage);
  }goToSitiosListados(params){
    if (!params) params = {};
    this.navCtrl.push(SitiosListadosPage);
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
