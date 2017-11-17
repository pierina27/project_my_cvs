import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PERFIL_ROUTING }  from "./app.routes";

import { AppComponent }  from './app.component';

import { DatosPersonalesService } from './services/datos-personales.service';
import { SkillService } from './services/skills.service';
import { ServicesService } from './services/services.service';

import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillPersonaComponent } from './components/skill-persona/skill-persona.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';

@NgModule({
	declarations: [ AppComponent, DatosPersonalesComponent, SkillListComponent, SkillPersonaComponent, AddSkillComponent ],
	imports:      [ 
	BrowserModule,
	FormsModule,
	PERFIL_ROUTING
	],
	providers: [ DatosPersonalesService, SkillService, ServicesService ],
	bootstrap:    [ AppComponent ]

})
export class AppModule { }
