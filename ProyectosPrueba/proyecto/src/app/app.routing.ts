import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//importar componentes
import { EmpleadosComponent} from "./empleados/empleados.component";
import {FrutaComponent} from "./fruta/fruta.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes=[
  {
    path:'', component: EmpleadosComponent
  },
  {path:'empleado', component: EmpleadosComponent},
  {path:'fruta', component: FrutaComponent},
  {path:'***', component:EmpleadosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'home', component:HomeComponent},

  {}
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
