import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  datos: NotasService;

  constructor(nota: NotasService) { 
    this.datos = nota;
  }

  ngOnInit(): void {
  }

  calc(){ // Cálculo de tareas pendientes
    let num_incompletos = this.datos.listatareas.filter(tarea => !tarea.estado).length;
    return num_incompletos;
  }

  mostrarTodas(){
    this.datos.ordenar();
    this.datos.listatareas = JSON.parse(localStorage["all"]);
  }

  mostrarIncompletas(){
    this.datos.listatareas = JSON.parse(localStorage["all"]);
    let incompletas = new Array(); // Nueva lista para almacenar incompletas
    this.datos.listatareas.forEach(tarea => {
        if (!tarea.estado) {
            incompletas.push(tarea);
        }
        this.datos.listatareas = incompletas; 
    });
  }

  mostrarCompletas(){
    this.datos.listatareas = JSON.parse(localStorage["all"]);
    let completas = new Array(); // Nuevo array para almacenar completas
    this.datos.listatareas.forEach(tarea => {
      if(tarea.estado){
        completas.push(tarea);
      }
      this.datos.listatareas = completas;
    })
  }
  
  borrarCompletas(){
    let arr = new Array();
    this.datos.listatareas.forEach(element => {
      if(!element.estado){
        arr.push(element);
      }
      
    })
    this.datos.listatareas = arr;
    this.datos.ordenar();
    this.datos.updateLocalStorage();
  }
}
