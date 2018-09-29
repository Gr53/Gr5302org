import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// imports login and sign
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';
import { IniciarSesionPage } from '../pages/iniciar-sesion/iniciar-sesion';
// imports home users (Admin/adult/young & and children)
import { BienvenidoAdministradorPage } from '../pages/bienvenido-administrador/bienvenido-administrador';
import { BienvenidoJovenPage } from '../pages/bienvenido-joven/bienvenido-joven';
import { BienvenidoPage } from '../pages/bienvenido/bienvenido';
import { BienvenidoAdminPage } from '../pages/bienvenido-admin/bienvenido-admin';
// imports crud 
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { SitiosDeAcopioPage } from '../pages/sitios-de-acopio/sitios-de-acopio';
import { CentroReciclajePage } from '../pages/centro-reciclaje/centro-reciclaje';
import { RolesDeUsuarioPage } from '../pages/roles-de-usuario/roles-de-usuario';
// import select ccenter recycling
import { CentrosReciclajePage } from '../pages/centros-reciclaje/centros-reciclaje';
// import multimedia_type & multimedia
import { TipoMultimediaPage } from '../pages/tipo-multimedia/tipo-multimedia';
import { MultimediaPage } from '../pages/multimedia/multimedia';
// import material_type & material
import { TipoMaterialPage } from '../pages/tipo-material/tipo-material';
import { MaterialPage } from '../pages/material/material';
// import update user 
import { DatosPersonalesAdultosPage } from '../pages/datos-personales-adultos/datos-personales-adultos';
import { DatosPersonalesJovenesPage } from '../pages/datos-personales-jovenes/datos-personales-jovenes';
import { DatosPersonalesAdminPage } from '../pages/datos-personales-admin/datos-personales-admin';
// imports read
import { UsuariosListadosPage } from '../pages/usuarios-listados/usuarios-listados';
import { RolesListadosPage } from '../pages/roles-listados/roles-listados';
import { SitiosListadosPage } from '../pages/sitios-listados/sitios-listados';
// imports others components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BienvenidoAdministradorPage,
    UsuariosPage,
    SitiosDeAcopioPage,
    CentroReciclajePage,
    IniciarSesionPage,
    CrearCuentaPage,
    DatosPersonalesAdminPage,
    MultimediaPage,
    TipoMultimediaPage,
    TipoMaterialPage,
    MaterialPage,
    DatosPersonalesAdultosPage,
    CentrosReciclajePage,
    DatosPersonalesJovenesPage,
    RolesDeUsuarioPage,
    BienvenidoJovenPage,
    BienvenidoPage,
    BienvenidoAdminPage,
    UsuariosListadosPage,
    RolesListadosPage,
    SitiosListadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BienvenidoAdministradorPage,
    UsuariosPage,
    SitiosDeAcopioPage,
    CentroReciclajePage,
    IniciarSesionPage,
    CrearCuentaPage,
    DatosPersonalesAdminPage,
    MultimediaPage,
    TipoMultimediaPage,
    TipoMaterialPage,
    MaterialPage,
    DatosPersonalesAdultosPage,
    CentrosReciclajePage,
    DatosPersonalesJovenesPage,
    RolesDeUsuarioPage,
    BienvenidoJovenPage,
    BienvenidoPage,
    BienvenidoAdminPage,
    UsuariosListadosPage,
    RolesListadosPage,
    SitiosListadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}