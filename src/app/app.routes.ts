import { RouterModule,Routes } from '@angular/router';

import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';

const routes: Routes = [
  { path: 'datos-personales', component: DatosPersonalesComponent },
  { path: '**', redirectTo:"" }

];

export const PERFIL_ROUTING = RouterModule.forRoot(routes);
