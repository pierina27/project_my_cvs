import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SkillService } from '../../services/skills.service';
import { DatosPersonalesService } from '../../services/datos-personales.service';
import { persona } from '../../models/persona.model';
import { skill } from '../../models/skill.model';

@Component({
	selector: 'app-skill-persona',
	templateUrl: './skill-persona.component.html',
	styleUrls: ['./skill-persona.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class SkillPersonaComponent implements OnInit {
	personas:any[];
	selectedPersona: persona;

	constructor(private _skillService:SkillService, 
				private _datosPersonalesService:DatosPersonalesService) {
		this.getPersonas();
	}

	ngOnInit() {
		
	}

	getPersonas(){
		this.personas = this._datosPersonalesService.getPersonas();
	}

	onSelect(persona: persona): void {
	  this.selectedPersona = persona;
	  console.log("selectedPersona", this.selectedPersona);
	}

	addSkill(){
		console.log(this.skill);
		this._skillService.setSkills(this.skill);
	}

	updateSkill(){
		console.log(this.skill);
		this._skillService.updateskill(this.skill);
	}

	deleteSkill(){
		console.log(this.skill);
		this._skillService.deleteskill(this.skill);
	}

}
