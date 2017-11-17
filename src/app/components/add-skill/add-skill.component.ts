import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SkillService } from '../../services/skills.service';
import { skill } from '../../models/skill.model';

@Component({
	selector: 'app-add-skill',
	templateUrl: './add-skill.component.html',
	styleUrls: ['./add-skill.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AddSkillComponent implements OnInit {
	skill:skill;
	constructor(private _skillService:SkillService) { }

	ngOnInit() {
	}

	addSkill(){
		console.log(this.skill);
		this._skillService.setSkills(this.skill);
	}

	updateSkill(){
		console.log(this.skill);
		this._skillService.updateskill(this.skill);
	}
}
