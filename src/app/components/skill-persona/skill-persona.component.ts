import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SkillService } from '../../services/skills.service';
import { persona } from '../../models/persona.model';


@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class SkillComponent implements OnInit {
	skill:any = {};
	@Input() Persona: persona;
	
	constructor(private _skillService:SkillService) { }

	ngOnInit() {
		
	}

	addSkill(){
		console.log(this.skill);
		this._skillService.setLocalstorageSkills(this.skill);
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
