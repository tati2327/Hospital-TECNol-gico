import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-equipment',
  templateUrl: './medical-equipment.component.html',
  styleUrls: ['./medical-equipment.component.css']
})
export class MedicalEquipmentComponent implements OnInit {
  
  listaEquipoMedico=[];

  constructor() { }

  ngOnInit(): void {
  }

}
