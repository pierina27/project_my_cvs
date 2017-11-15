import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatosPersonalesService } from '../../services/datos-personales.service';
import { persona } from '../../models/persona.model';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DatosPersonalesComponent implements OnInit {
	persona:any = {};

  constructor(private _datosPersonalesService: DatosPersonalesService) { }

  ngOnInit() {
  }

  addDatosPersonales(){
    console.log(this.persona);
    this._datosPersonalesService.setLocalstoragePersona(this.persona);
  }

  updatePersona(){
    console.log(this.persona);
    this._datosPersonalesService.updatePersona(this.persona);
  }

  deletePersona(){
    console.log(this.persona);
    this._datosPersonalesService.deletePersona(this.persona);
  }

}
