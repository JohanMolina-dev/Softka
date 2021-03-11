export class Tarifa{

    diasEstancia: number;
    distanciARecorrer: number;
    precioPorKilometro: number;
    resultado: number;
    resultadoDescuento: number;
    id: number
    constructor(pEstancia = 0, pDistancia = 0,  pPrecioKilometro = 35.00, pResultado = 0, pResultadoDescuento =0){
    this.diasEstancia = pEstancia;
    this.distanciARecorrer = pDistancia;
    this.precioPorKilometro = pPrecioKilometro;
    this.resultado = pResultado,
    this.resultadoDescuento = pResultadoDescuento;
    this.id = 1
    }
}