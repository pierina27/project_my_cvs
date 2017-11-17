import { RouterModule,Routes } from '@angular/router';

import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { SkillPersonaComponent } from './components/skill-persona/skill-persona.component';

const routes: Routes = [
  { path: 'datos-personales', component: DatosPersonalesComponent },
  { path: 'skills', component: SkillPersonaComponent },
  { path: '**', redirectTo:"" }
];

export const PERFIL_ROUTING = RouterModule.forRoot(routes);
