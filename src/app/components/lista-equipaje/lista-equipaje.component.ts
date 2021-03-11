import { Component, Input, OnInit } from '@angular/core';
import { Equipaje } from 'src/models/equipaje.model';

@Component({
  selector: 'app-lista-equipaje',
  templateUrl: './lista-equipaje.component.html',
  styleUrls: ['./lista-equipaje.component.css']
})
export class ListaEquipajeComponent implements OnInit {
  @Input() calculoPeso : Equipaje[];
  constructor() { }

  ngOnInit(): void {
  }

  
}
