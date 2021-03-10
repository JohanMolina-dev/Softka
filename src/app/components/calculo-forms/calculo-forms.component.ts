import { Component, OnInit } from '@angular/core';
import { Tarifa } from 'src/models/tarifa.model';


@Component({
  selector: 'app-calculo-forms',
  templateUrl: './calculo-forms.component.html',
  styleUrls: ['./calculo-forms.component.css']
})
export class CalculoFormsComponent implements OnInit {
  nuevaTarifa: Tarifa;
  constructor() {
    this.nuevaTarifa = new Tarifa();
   }
  
  ngOnInit(): void {
  }

}
