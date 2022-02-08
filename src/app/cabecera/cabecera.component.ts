import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})

export class CabeceraComponent implements OnInit {

  datos: NotasService;
  nombre = '';

  constructor(nota: NotasService) { 
    this.datos = nota;
  }

  agregar(){
    console.log(this.nombre);
    this.datos.listatareas.push({
      nombre: this.nombre,
      fecha: new Date().toLocaleString(),
      prioridad: 1,
      prioridadname: 'Baja',
      estado: false
    });
    this.nombre = '';
  }

  ngOnInit(): void {
  }

}
