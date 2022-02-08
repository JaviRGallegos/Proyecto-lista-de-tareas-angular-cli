import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  

  datos: NotasService;

  constructor(nota: NotasService) { 
    this.datos = nota;
  }

  ngOnInit(): void {
  }
  
  cambiarEstado(i: number){
    this.datos.listatareas[i].estado = !this.datos.listatareas[i].estado;
    this.datos.updateLocalStorage();
  }

  incprioridad(i: number){
    if(this.datos.listatareas[i].prioridad <= 3){
      this.datos.listatareas[i].prioridad++;
    }
    this.nameprioridad();
    this.datos.ordenar();
    this.datos.updateLocalStorage();
  }

  decprioridad(i: number){
    if(this.datos.listatareas[i].prioridad >= 1){
      this.datos.listatareas[i].prioridad--;
    }
    this.nameprioridad();
    this.datos.ordenar();
    this.datos.updateLocalStorage();
  }

  borrar(i: number){
    this.datos.listatareas.splice(i, 1);
    this.datos.updateLocalStorage();
  }

  

  nameprioridad(){ // Ponerle nombre a cada número de prioridad, 1 siendo baja y 3 siendo la más alta y la máxima
    this.datos.listatareas.forEach(element => {
        if(element.prioridad == 1){
            element.prioridadname = 'Baja';
        }else if(element.prioridad == 2){
            element.prioridadname = 'Media';
        }else{
            element.prioridadname = 'Alta';
        }
    }); 
    this.datos.updateLocalStorage();
  }

  // Preguntar cómo se hace el computed para poner el mensaje "4 tareas, 4 pendientes"
}
