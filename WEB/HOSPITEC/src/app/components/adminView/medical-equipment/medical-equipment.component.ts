import { Component, OnInit } from '@angular/core';
import { EquipoMedicoService } from 'src/app/services/administracion/equipo-medico.service';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-medical-equipment',
  templateUrl: './medical-equipment.component.html',
  styleUrls: ['./medical-equipment.component.css']
})
export class MedicalEquipmentComponent implements OnInit {

  constructor( public equipoMedicoService: EquipoMedicoService) { }
  
  listaEquipoMedico = []

  ngOnInit(): void {


    /** Ingresar las camas en la lista para mostrar tablas */
    this.equipoMedicoService.getEquipoMedico().subscribe((equipoMedico) => {
      this.listaEquipoMedico = equipoMedico;
    })

  }

  ngDoCheck(): void{
    var equipoMedicoService = this.equipoMedicoService;
    var llavePrimaria;

    /** Proyecto 2 Bases de Datos: Hospital TECNológico
        Vista de gestion de equipo medico.
        Objetivo: crear un nuevo equipo medico
        Autor-Autora: Tatiana.
        Entradas:noCama, tipo, noSalon, disponilidad 
     * FUNCION ENVIAR INFORMACION
     */
    $(document).ready(function () {
      $("#sendNewEquipment").click(function () {
        var idequipo = $("#idequipo").val();
        var nombre = $("#nombreequipo").val();
        var proveedor = $("#proveedor").val();
        var cantidad = $("#cantequipo").val();
        equipoMedicoService.sendData(idequipo, nombre, proveedor, cantidad);
      });
    })

    /*FUNCIÓN MODIFICAR EN LA TABLA
     */
    $(document).ready(function() {
      $(".editTable").on('click',function() {
        var $row = $(this).closest("tr");    // Find the row
        var idequipo = $row.find("td:eq(0)").text(); // Find the text
        var nombre = $row.find("td:eq(1)").text(); // Find the text
        var proveedor = $row.find("td:eq(2)").text();
        var cantidad = $row.find("td:eq(3)").text();
        llavePrimaria = idequipo;
        console.log(idequipo);
        $("#idequipomodf").val(idequipo);
        $("#nombreequipomodf").val(nombre);
        $("#proveedormodf").val(proveedor);
        $("#cantmodf").val(cantidad);
      });
    })
    
    /** Proyecto 2 Bases de Datos: Hospital TECNológico
        Vista de gestion de camas.
        Objetivo: Modificar una cama
        Autor-Autora: Tatiana.
        Entradas:noCama, tipo, noSalon, disponilidad 
     */
    $(document).ready(function () {
      $("#sendModifiedEquipment").click(function () {
        var idequipo = $("#idequipomodf").val();
        var nombre = $("#nombreequipomodf").val();
        var proveedor = $("#proveedormodf").val();
        var cantidad = $("#cantmodf").val();
        equipoMedicoService.modificar(llavePrimaria,idequipo,nombre, proveedor, cantidad);
      });
    })
    
    /*Proyecto 2 Bases de Datos: Hospital TECNológico
      Vista de gestion de equipo medico.
      Objetivo: Obtener la llave primaria de la fila que queremos eliminar para luego 
      utilizarla en la funcion en que se la enviamos al api.
      Autor-Autora: Tatiana.
     */
    $(document).ready(function() {
      $(".deleteRows").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        llavePrimaria = $row.find("td:eq(0)").text(); // Find the text  
      });
    })

    /*Proyecto 2 Bases de Datos: Hospital TECNológico
      Vista  de gestion de equipo medico.
      Objetivo: Llamar la funcion que envia la llave primaria al api de la entidad
      que queremos eliminar.
      Autor-Autora: Tatiana.
      Entradas:llavePrimaria */
    $(document).ready(function () {
        $("#sendDeletedEquipment").click(function () {
          var $row = $(this).closest("tr");    // Find the row
          console.log(llavePrimaria);
          equipoMedicoService.delete(llavePrimaria);
        });
    })

      
  }
}
