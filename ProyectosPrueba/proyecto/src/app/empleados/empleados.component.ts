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


  constructor(){

    this.empleado=new Empleado('david',45,'cocinero',true);

    this.trabajadores=[
      new Empleado('david',45,'cocinero',true),
      new Empleado('david2',55,'cocinero',true),
      new Empleado('david3',65,'cocinero',false)
    ];
    this.trabajadorexterno=false;
  }

  ngOnInit() {

  console.log(this.empleado);
    console.log(this.trabajadores);
  }
cambiarExterno(valor){
    this.trabajadorexterno=valor;
}
}
