import { Injectable } from '@angular/core';
import  { persona } from '../models/persona.model';

@Injectable()
export class DatosPersonalesService{
	constructor (){

	}

	personas = this.getLocalstoragePersonas();

  getLocalstoragePersonas(){
    console.log(localStorage.getItem('personas'))
    if(JSON.parse(localStorage.getItem('personas'))){
      return JSON.parse(localStorage.getItem('personas'));
    }else{
      return [];
    }
  }
  setLocalstoragePersona(persona:persona){
  	if(!persona.id){
    	persona.id = this.personas.length + 1;
    	this.personas.push(persona);
  	}

    console.log("Persona a incluir o modificar: ", persona);
    localStorage.setItem('personas',JSON.stringify(this.personas));
    this.personas = this.getLocalstoragePersonas();
  }

  updatePersona(persona:persona){
  	var index = this.personas.findIndex((obj:any) => obj.id == persona.id);
  	this.personas[index] = persona;
    this.setLocalstoragePersona(persona);
  }

  deletePersona(persona:persona){
    for(var i = 0; i < this.personas.length; i++){
      if(this.personas[i].id == persona.id){
        this.personas.splice(i, 1);
        return;
      }
    }
  }


}