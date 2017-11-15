import { Injectable } from '@angular/core';
import  { skill } from '../models/skill.model';
import  { tipoSkill } from '../models/tipo-skill.model';

@Injectable()
export class SkillService{
	constructor (){

	}

	skills = this.getLocalstorageSkills();

  getLocalstorageSkills(){
    console.log(localStorage.getItem('skills'))
    if(JSON.parse(localStorage.getItem('skills'))){
      return JSON.parse(localStorage.getItem('skills'));
    }else{
      return [];
    }
  }

  setLocalstorageSkills(skill:skill){
  	if(!skill.id){
    	skill.id = this.skills.length + 1;
    	this.skills.push(skill);
  	}

    console.log("skill a incluir o modificar: ", skill);
    localStorage.setItem('skills',JSON.stringify(this.skills));
    this.skills = this.getLocalstorageSkills();
  }

  updateskill(skill:skill){
  	var index = this.skills.findIndex((obj:any) => obj.id == skill.id);
  	this.skills[index] = skill;
    this.setLocalstorageSkills(skill);
  }

  deleteskill(skill:skill){
    for(var i = 0; i < this.skills.length; i++){
      if(this.skills[i].id == skill.id){
        this.skills.splice(i, 1);
        return;
      }
    }
  }


}