export class Equipaje {
  id: number;
  peso: number;
  // pesoPromedio: number;
  // pesoMaximo: number;
  // pesoMinimo: number;
  // equipajeTotal: number;
  costoCop: number;
  costoUsd: number;
  // totalCop: number;
  // totalUsd: number;

  constructor(pPeso = 0) {
    this.id = 1;
    this.peso = pPeso;
    // this.pesoPromedio = 0;
    // this.pesoMaximo = 0;
    // this.pesoMinimo = 0;
    // this.equipajeTotal = 0;
    this.costoCop = 0;
    this.costoUsd = 0;
    // this.totalCop = 0;
    // this.totalUsd = 0;
  }
}
