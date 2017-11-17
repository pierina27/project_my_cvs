import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService{
	constructor (){

	}

getDatos(tipo:string){
 console.log(localStorage.getItem(tipo))
    if(JSON.parse(localStorage.getItem(tipo))){
      return JSON.parse(localStorage.getItem(tipo));
    }else{
      return [];
    }
}

setDatos(item:any, tipo:string){
  var items = this.getDatos(tipo);
  if(!item.id){
      item.id = items.length + 1;
      items.push(item);
    }

    console.log("skill a incluir o modificar: ", item);
    localStorage.setItem(tipo,JSON.stringify(items));
}


  updateDatos(item:any, tipo:string){
    var items = this.getDatos(tipo);
  	var index = items.findIndex((obj:any) => obj.id == item.id);
  	items[index] = item;
    this.setDatos(items, tipo);
  }

  deleteDatos(item:any, tipo:string){
    var items = this.getDatos(tipo);
    for(var i = 0; i < items.length; i++){
      if(items[i].id == item.id){
        items.splice(i, 1);
        return;
      }
    }
  }


}