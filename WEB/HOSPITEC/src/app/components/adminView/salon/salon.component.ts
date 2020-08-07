import { Component, OnInit } from '@angular/core';
import { SalonService } from 'src/app/services/administracion/salon.service';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  constructor( public salonService: SalonService) { }
  
  listaSalones = []

  ngOnInit(): void {


    /** Ingresar las camas en la lista para mostrar tablas */
    this.salonService.getSalones().subscribe((camas) => {
      this.listaSalones = camas;
    })

  }

  ngDoCheck(): void{
    var salonService = this.salonService;
    var llavePrimaria;
    /** Proyecto 2 Bases de Datos: Hospital TECNológico
        Vista de gestion de camas.
        Objetivo: crear una nueva cama
        Autor-Autora: Tatiana.
        Entradas:noCama, tipo, noSalon, disponilidad 
     * FUNCION ENVIAR INFORMACION
     */
    $(document).ready(function () {
      $("#sendNewSalon").click(function () {
        var nosalon = $("#nosalon").val();
        var nombre = $("#nombre").val();
        var tipo = $("#tipo").val();

        var tipomedicina:string;
        console.log(tipo);
        if(tipo=="Mujeres"){
          console.log("Mujeres");
          tipomedicina="Mujeres";
        }
        if(tipo=="Hombres"){
          console.log("Hombres");
          tipomedicina="Hombres";
        }
        if(tipo=="Niños(as)"){
          console.log("Niños(as)");
          tipomedicina="Niños(as)";
        }

        var piso = $("#piso").val();
        var cantidadcamas = $("#cantidadcamas").val();
        
        salonService.sendData(nosalon, nombre, tipomedicina, piso, cantidadcamas);
      });
    })

    $(document).ready(function() {
      $(".editTable").on('click',function() {
        var $row = $(this).closest("tr");    // Find the row
        var nosalon = $row.find("td:eq(0)").text(); // Find the text
        var nombre = $row.find("td:eq(1)").text(); // Find the text
        var tipo=$row.find("td:eq(2)").text();
        var piso=$row.find("td:eq(3)").text();
        var cantidadcamas=$row.find("td:eq(4)").text();
        llavePrimaria=nosalon;
        console.log(nosalon);
        $("#nosalonmodf").val(nosalon);
        $("#nombremodf").val(nombre);
        $("#tipomodif").val(tipo);
        $("#pisomodf").val(piso);
        $("#cantidadcamasmodf").val(cantidadcamas);
      });
    })
    
    /** Proyecto 2 Bases de Datos: Hospital TECNológico
        Vista de gestion de camas.
        Objetivo: Modificar una cama
        Autor-Autora: Tatiana.
        Entradas:noCama, tipo, noSalon, disponilidad 
     */
    $(document).ready(function () {
      $("#sendModifiedSalon").click(function () {
        var nosalon = $("#nosalonmodf").val();
        var nombre = $("#nombremodf").val();
        var tipo = $("#tipomodf").val();

        var tipomedicina:string;
        console.log(tipo);
        if(tipo=="Mujeres"){
          console.log("Mujeres");
          tipomedicina="Mujeres";
        }
        if(tipo=="Hombres"){
          console.log("Hombres");
          tipomedicina="Hombres";
        }
        if(tipo=="Niños(as)"){
          console.log("Niños(as)");
          tipomedicina="Niños(as)";
        }

        var piso = $("#pisomodf").val();
        var cantidadcamas = $("#cantidadcamas").val();
        salonService.modificar(llavePrimaria, nosalon, nombre, tipomedicina, piso, cantidadcamas);
      });
    })
    
      /* 
    Proyecto 2 Bases de Datos: Hospital TECNológico
    Vista Procedimientos Medicos.
    Objetivo: Obtener la llave primaria de la fila que queremos eliminar para luego 
    utilizarla en la funcion en que se la enviamos al api.
    Autor-Autora: Pablo.
     */
    $(document).ready(function() {
      $(".deleteRows").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        llavePrimaria = $row.find("td:eq(0)").text(); // Find the text  
      });
    })

    /** Proyecto 2 Bases de Datos: Hospital TECNológico
      Vista de gestion de camas.
      Objetivo: Llamar la funcion que envia la llave primaria al api de la entidad
      que queremos eliminar.
      Autor-Autora: Tatiana.
      Entradas:llavePrimaria */
      $(document).ready(function () {
        $("#sendDeletedSalon").click(function () {
          var $row = $(this).closest("tr");    // Find the row
          console.log(llavePrimaria);
          salonService.delete(llavePrimaria);
        });
      })

      
  }


}
