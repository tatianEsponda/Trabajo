import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl:'./fruta.component.html'


})
export class FrutaComponent implements OnInit  {

  public nombre_componente;
  public listado_fruta: string;
  public mayorDeEdad: boolean;
  public trabajos: Array<any>;
  comodin: any;

  constructor() {

    this.nombre_componente = 'componente de fruta';
    this.listado_fruta = 'naranja, manzana ';
    this.trabajos = ['carpitero', 'albanil', 'fontanero'];
    this.mayorDeEdad = true;
    this.comodin = 'comodin';
    }
  ngOnInit() {
    this.holamundo();

    var uno=8
    var dos=15;

    if(uno === 8){
      let uno=3;
      var dos=88;
      console.log("dentro de if"+ uno);
    }
    console.log("fuera de if"+ uno);
  }


holamundo(){
this.nombre_componente='juan';
  alert('hola mundo'+ this.nombre_componente);
}

}




