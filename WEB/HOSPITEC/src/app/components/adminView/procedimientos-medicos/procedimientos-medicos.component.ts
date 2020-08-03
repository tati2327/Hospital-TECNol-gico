import { Component, OnInit } from '@angular/core';
import {ProcedimientosService} from 'src/app/services/administracion/procedimientos.service';
import {Procedimientos} from 'src/app/models/administracion/procedimientos';

declare var $: any;

@Component({
  selector: 'app-procedimientos-medicos',
  templateUrl: './procedimientos-medicos.component.html',
  styleUrls: ['./procedimientos-medicos.component.css']
})
export class ProcedimientosMedicosComponent implements OnInit {

    constructor(private procedimientosService: ProcedimientosService) { }
  listaProcedimientos=[]
  
  ngOnInit(): void {
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var primaryKey = $row.find("td:eq(1)").text(); // Find the text
      var col1=$row.find("td:eq(2)").text();
      var col2=$row.find("td:eq(3)").text();
      var col3=$row.find("td:eq(4)").text();
      var col4=$row.find("td:eq(5)").text();
      var col5=$row.find("td:eq(6)").text();
      
      $("#modifiedName").val(primaryKey);
      $("#modifiedLocation").val(col1);
      $("#modifiedCapacity").val(col2);
      $("#modifiedUci").val(col3);
      $("#modifiedDirector").val(col4);
      $("#modifiedPhone").val(col5);

    });
    }); 

    

  /*   Obtener Informacion del Api */
    this.procedimientosService.getProcedimientos().subscribe((procedimientos) =>{
      this.listaProcedimientos=procedimientos;
    }) 
    // this.hospitalsList=this.hospitalsService.getHospitals()
  }
}
