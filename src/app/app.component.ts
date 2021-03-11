import { Component } from '@angular/core';
import { Equipaje } from 'src/models/equipaje.model';
import { Tarifa } from 'src/models/tarifa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrPeso = [];
  arrEquipaje: Equipaje[];
  arrCalculo: Tarifa[];
  totalCop: number;
  totalUsd: number;
  tamanio: number;
  promedio: number;
  promedioUsd: number;
  pesoPromedio: number;
  pesoTotal: number;
  numMayor: number;
  minMayor: number;

  constructor() {
    this.arrCalculo = [];
    this.arrEquipaje = [
      {
        id: 1,
        peso: 30,
        costoCop: 0,
        costoUsd: 0,
      },
      {
        id: 2,
        peso: 300,
        costoCop: 450000,
        costoUsd: 126.92,
      },
      {
        id: 3,
        peso: 15,
        costoCop: 0,
        costoUsd: 0,
      },
      {
        id: 4,
        peso: 200,
        costoCop: 300000,
        costoUsd: 84.61,
      },
      {
        id: 5,
        peso: 10,
        costoCop: 0,
        costoUsd: 0,
      },
      {
        id: 6,
        peso: 450,
        costoCop: 1125000,
        costoUsd: 317.3,
      },
      {
        id: 7,
        peso: 12,
        costoCop: 0,
        costoUsd: 0,
      },
      {
        id: 8,
        peso: 500,
        costoCop: 1250000,
        costoUsd: 352.55,
      },
      {
        id: 9,
        peso: 12,
        costoCop: 0,
        costoUsd: 0,
      },
      {
        id: 10,
        peso: 500,
        costoCop: 1250000,
        costoUsd: 352.55,
      },
      {
        id: 11,
        peso: 325,
        costoCop: 812500,
        costoUsd: 229.16,
      },
      {
        id: 12,
        peso: 2,
        costoCop: 0,
        costoUsd: 0,
      },
      {
        id: 13,
        peso: 23,
        costoCop: 0,
        costoUsd: 0,
      },
      {
        id: 14,
        peso: 490,
        costoCop: 1225000,
        costoUsd: 345.5,
      },
      {
        id: 15,
        peso: 16,
        costoCop: 0,
        costoUsd: 0,
      },
    ];
    this.arrPeso = [
      30,
      300,
      15,
      200,
      10,
      450,
      12,
      500,
      12,
      500,
      325,
      2,
      23,
      490,
      16,
    ];
  }
  onCalculo(e) {
    this.arrCalculo.push(e);
    console.log(this.arrCalculo);
  }
  onEquipaje(e) {
    // valor por kilo  - de 0 a 25 Kg. cero pesos
    if (e.peso >= 0 && e.peso <= 25) {
      let costo = 0;
      e.costoCop = costo + e.peso;
      e.costoCop = costo + e.peso;
      this.arrEquipaje.push(e);
      this.arrPeso.push(e.peso);

      //Total en pesos colombianos
      this.totalCop = this.arrEquipaje.reduce((total, item) => {
        return total + item.costoCop;
      }, 0);
      //Total en Dolares
      this.totalUsd = this.arrEquipaje.reduce((total, item) => {
        return total + item.costoUsd;
      }, 0);
      //Valor promedio COP
      this.tamanio = this.arrEquipaje.length;
      this.promedio = this.totalCop / this.tamanio;
      //Valor promedio en USD
      this.promedioUsd = this.totalUsd / this.tamanio;
      //Peso Total
      this.pesoTotal = this.arrEquipaje.reduce((total, item) => {
        return total + item.peso;
      }, 0);

      //Peso Promedio
      this.pesoPromedio = this.pesoTotal / this.tamanio;

      this.numMayor = Math.max.apply(Math, this.arrPeso);
      this.minMayor = Math.min.apply(Math, this.arrPeso);

      //valor por kilo - de 26 a 300 Kg. 1500 pesos por kilo de equipaje.
      if (e.peso >= 26 && e.peso <= 300) {
        let costoPesos = 1500;
        let costoDolar = 0.42;
        e.costoCop = costoPesos * e.peso;
        e.costoUsd = costoDolar * e.peso;
        this.arrEquipaje.push(e);
        //Total en pesos colombianos
        this.totalCop = this.arrEquipaje.reduce((total, item) => {
          return total + item.costoCop;
        }, 0);
        //Total en Dolares
        this.totalUsd = this.arrEquipaje.reduce((total, item) => {
          return total + item.costoUsd;
        }, 0);
        //Valor promedio COP
        this.tamanio = this.arrEquipaje.length;
        this.promedio = this.totalCop / this.tamanio;
        //Valor promedio en USD
        this.promedioUsd = this.totalUsd / this.tamanio;
        //Peso Total
        this.pesoTotal = this.arrEquipaje.reduce((total, item) => {
          return total + item.peso;
        }, 0);

        //Peso Promedio
        this.pesoPromedio = this.pesoTotal / this.tamanio;
        this.numMayor = Math.max.apply(Math, this.arrPeso);
        this.minMayor = Math.min.apply(Math, this.arrPeso);
      }
      // valor por kilo  - de 301 a 500 Kg. 2500 pesos por kilo de equipaje
      if (e.peso >= 301 && e.peso <= 500) {
        let costoPesos = 2500;
        let costoDolar = 0.71;
        e.costoCop = costoPesos * e.peso;
        e.costoUsd = costoDolar * e.peso;
        this.arrEquipaje.push(e);
        //Total en pesos colombianos
        this.totalCop = this.arrEquipaje.reduce((total, item) => {
          return total + item.costoCop;
        }, 0);
        //Total en Dolares
        this.totalUsd = this.arrEquipaje.reduce((total, item) => {
          return total + item.costoUsd;
        }, 0);
        //Valor promedio COP
        this.tamanio = this.arrEquipaje.length;
        this.promedio = this.totalCop / this.tamanio;
        //Valor promedio en USD
        this.promedioUsd = this.totalUsd / this.tamanio;
        //Peso Total
        this.pesoTotal = this.arrEquipaje.reduce((total, item) => {
          return total + item.peso;
        }, 0);

        //Peso Promedio
        this.pesoPromedio = this.pesoTotal / this.tamanio;
        this.numMayor = Math.max.apply(Math, this.arrPeso);
        this.minMayor = Math.min.apply(Math, this.arrPeso);
      }

      //Total
    }
  }
}
