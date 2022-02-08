import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  listatareas = new Array();
  
  constructor() {
    
  }

  ordenar(){
    this.listatareas = this.listatareas.sort((a, b) => {
      if (b.prioridad == 2 && a.prioridad == 1) {
          return 1;
      }else if (b.prioridad == 3 && a.prioridad == 1) {
          return 1;
      }else if(b.prioridad == 3  && a.prioridad == 2){
          return 1;
      }else if (a.prioridad == 3 && b.prioridad == 2) {
          return -1;
      }else if (a.prioridad == 3 && b.prioridad == 1) {
          return -1;
      }else if (a.prioridad == 2 && b.prioridad == 1) {
          return -1;
      }else{
          return 0;
      }
    });
  }

  updateLocalStorage(){ // Preguntar el tipo de objeto de all
    localStorage["all"] = JSON.stringify(this.listatareas);
  }
}
