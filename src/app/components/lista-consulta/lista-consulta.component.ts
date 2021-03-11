import { Component, Input, OnInit } from '@angular/core';
import { Tarifa } from 'src/models/tarifa.model';

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.css']
})
export class ListaConsultaComponent implements OnInit {
@Input() calculoTarifa: Tarifa[];
  constructor() { 
    
  }
 
  ngOnInit(): void {
  }
  

}
