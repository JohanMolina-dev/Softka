export class Tarifa{

    diasEstancia: number;
    distanciARecorrer: number;
    precioPorKilometro: number;
    constructor(pEstancia = 0, pDistancia = 0,  pPrecioKilometro = 35.00){
    this.diasEstancia = pEstancia;
    this.distanciARecorrer = pDistancia;
    this.precioPorKilometro = pPrecioKilometro;
    }
}