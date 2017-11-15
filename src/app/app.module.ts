import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { DatosPersonalesService } from './services/datos-personales.service';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { FormsModule } from '@angular/forms';

import { PERFIL_ROUTING }  from "./app.routes";
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsPersonaComponent } from './components/skills-persona/skills-persona.component';

@NgModule({
	declarations: [ AppComponent, DatosPersonalesComponent, SkillsComponent, SkillsPersonaComponent ],
	imports:      [ 
	BrowserModule,
	FormsModule,
	PERFIL_ROUTING
	],
	providers: [ DatosPersonalesService ],
	bootstrap:    [ AppComponent ]

})
export class AppModule { }
