import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SkillService } from '../../services/skills.service';
import { persona } from '../../models/persona.model';
import { skill } from '../../models/skill.model';

@Component({
	selector: 'app-skills',
	templateUrl: './skill-list.component.html',
	styleUrls: ['./skill-list.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class SkillListComponent implements OnInit {
	skill:skill;
	@Input() Persona: persona;

	constructor(private _skillService:SkillService) { }

	ngOnInit() {
		
	}

	selectSkillPersona(){

	}

	noSelectSkillPersona(){

	}

	deleteSkill(){
		console.log(this.skill);
		this._skillService.deleteskill(this.skill);
	}

}
