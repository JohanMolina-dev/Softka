import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarifa } from 'src/models/tarifa.model';

@Component({
  selector: 'app-calculo-forms',
  templateUrl: './calculo-forms.component.html',
  styleUrls: ['./calculo-forms.component.css'],
})
export class CalculoFormsComponent implements OnInit {
  @Output() calculoRealizado: EventEmitter<Tarifa>;
  nuevaTarifa: Tarifa;
  
  numArr = [1, 2, 3];

  numMayor = Math.max.apply(Math, this.numArr);
  minMayor = Math.min.apply(Math, this.numArr);
  idNuevo: number;
  

  constructor() {
    this.nuevaTarifa = new Tarifa();
    this.calculoRealizado = new EventEmitter();
    this.idNuevo = 0;
  }

  ngOnInit(): void {}
  mejorNum() {
    console.log('numero mayor', this.numMayor);
    console.log('numero menor', this.minMayor);
    let tamanno = this.numArr.length;
    let suma = this.numArr.reduce((previous, current) => (current += previous));
    let promedio = suma / tamanno;
    console.log('numero de bultos', tamanno);
    console.log('suma', suma);
    console.log('promedio', promedio);
  }
  // mayorNum(){
  //   for (let index = 0; index < this.numArr.length; index++) {
  //     if(this.numArr[index]> this.mayor){
  //     this.mayor= this.numArr[index];
  //     console.log(this.mayor)

  //     }

  //   }

  // };

  onClick() {
    console.log('pulsado');

    if (
      this.nuevaTarifa.diasEstancia > 7 &&
      this.nuevaTarifa.distanciARecorrer > 1000
    ) {
      this.nuevaTarifa.resultado =
        this.nuevaTarifa.distanciARecorrer *
        this.nuevaTarifa.precioPorKilometro;
      this.nuevaTarifa.resultadoDescuento = this.nuevaTarifa.resultado * 0.7;
    } else {
      this.nuevaTarifa.resultado =
        this.nuevaTarifa.distanciARecorrer *
        this.nuevaTarifa.precioPorKilometro;
    }
    this.nuevaTarifa.id = this.nuevaTarifa.id + this.idNuevo; 
    this.idNuevo = this.nuevaTarifa.id;
    console.log('Valor sin descuento', this.nuevaTarifa.resultado);
    console.log('Valor descuento', this.nuevaTarifa.resultadoDescuento);
    this.calculoRealizado.emit(this.nuevaTarifa);
    this.nuevaTarifa = new Tarifa();
  }
}
