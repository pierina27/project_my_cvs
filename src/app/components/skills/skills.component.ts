import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SkillService } from '../../services/skills.service';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class SkillComponent implements OnInit {
	skill:any = {};
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
