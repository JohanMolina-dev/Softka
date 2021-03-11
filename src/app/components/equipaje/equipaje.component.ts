import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Equipaje } from 'src/models/equipaje.model';

@Component({
  selector: 'app-equipaje',
  templateUrl: './equipaje.component.html',
  styleUrls: ['./equipaje.component.css'],
})
export class EquipajeComponent implements OnInit {
  @Output() sendController: EventEmitter<Equipaje>;
  controladorEquipaje: Equipaje;
  id : number;

  constructor() {
    this.controladorEquipaje = new Equipaje();
    this.sendController = new EventEmitter();
    this.id = 15;
  }

  ngOnInit(): void {}
  onController() {
    console.log('pulsado');
    if (typeof this.controladorEquipaje.peso != 'number') {
      return window.alert('el valor debe ser numerico');
    }
    if (
      !(
        this.controladorEquipaje.peso >= 0 &&
        this.controladorEquipaje.peso <= 500
      )
    ) {
      window.alert('Error de Rango');
      
    } else {
      this.controladorEquipaje.id = this.controladorEquipaje.id + this.id;
      this.id = this.controladorEquipaje.id;
      this.sendController.emit(this.controladorEquipaje);
      this.controladorEquipaje = new Equipaje();
    }

    console.log('emitido');
  }
}
