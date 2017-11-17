import { Injectable } from '@angular/core';
import  { persona } from '../models/persona.model';
import { ServicesService } from './services.service';

@Injectable()
export class DatosPersonalesService{
	constructor (private _service : ServicesService){

	}

	tipo = "personas";

  getPersonas(){
    return this._service.getDatos(this.tipo);
  }

  setLocalstoragePersona(persona:persona){
    this._service.setDatos(persona, this.tipo);
  }

  updatePersona(persona:persona){
    this._service.updateDatos(persona, this.tipo);
  }

  deletePersona(persona:persona){
    this._service.deleteDatos(persona, this.tipo);
  }


}