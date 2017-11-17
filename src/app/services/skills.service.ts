import { Injectable } from '@angular/core';
import  { skill } from '../models/skill.model';
import  { tipoSkill } from '../models/tipo-skill.model';
import { ServicesService } from './services.service';

@Injectable()
export class SkillService{
	constructor (private _service : ServicesService){

	}

  tipo = "skills";

  getSkills(){
    return this._service.getDatos(this.tipo);
  }

  setSkills(skill:skill){
  	this._service.setDatos(skill, this.tipo);
  }

  updateskill(skill:skill){
  	this._service.updateDatos(skill, this.tipo);
  }

  deleteskill(skill:skill){
    this._service.deleteDatos(skill, this.tipo);
  }
}