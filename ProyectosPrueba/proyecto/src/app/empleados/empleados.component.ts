import { Component, OnInit } from '@angular/core';
import {Empleado} from "./empleado";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public nombre_componentes = 'hola';
  public listado_empleado = 'juan, andres ';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajadorexterno:boolean;
  public titulo='bienvenido';
  public color:string;
  public color_seleccionado:string;
  public tamaños:string;

  constructor(){

    this.empleado=new Empleado('david',45,'cocinero',true);

    this.trabajadores=[
      new Empleado('david',45,'cocinero',true),
      new Empleado('david2',55,'cocinero',true),
      new Empleado('david3',65,'cocinero',false)
    ];
    this.trabajadorexterno=false;
    this.color='pink' ;
    this.color_seleccionado= '#ccc';
    this.tamaños='largo'
    ;

  }

  ngOnInit() {

  console.log(this.empleado);
    console.log(this.trabajadores);
    console.log(this.tamaños);
  }
cambiarExterno(valor){
    this.trabajadorexterno=valor;
}

logColorSeleccionado(){
    console.log(this.color_seleccionado);
}
tamañoSeleccionado(){
    console.log(this.tamaños);
}
}
