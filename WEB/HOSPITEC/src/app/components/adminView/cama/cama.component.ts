import { Component, OnInit,OnDestroy,DoCheck } from '@angular/core';
import { CamaService } from 'src/app/services/administracion/cama.service';

import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-cama',
  templateUrl: './cama.component.html',
  styleUrls: ['./cama.component.css']
})
export class CamaComponent implements OnInit,DoCheck {

  constructor( public camaService: CamaService) { }
  
  listaCamas = []

  ngOnInit(): void {
    /** Ingresar las camas en la lista para mostrar tablas */
    this.camaService.getCamas().subscribe((camas) => {
      this.listaCamas = camas;
    })
  }

  ngDoCheck(): void{
    var camaService = this.camaService;
    var llavePrimaria;
    /** Proyecto 2 Bases de Datos: Hospital TECNológico
        Vista de gestion de camas.
        Objetivo: crear una nueva cama
        Autor-Autora: Tatiana.
        Entradas:noCama, tipo, noSalon, disponilidad 
     * FUNCION ENVIAR INFORMACION
     */
    $(document).ready(function () {
      $("#sendNewBed").click(function () {
        var nocama = $("#nocama").val();
        var tipo = $("#tipocama").val();

        var tipocama:string;
        console.log(tipo);
        if(tipo=="Normal"){
          console.log("toy normal");
          tipocama="Normal";
        }
        if(tipo=="UCI"){
          console.log("toy uci");
          tipocama="UCI";
        }

        var nosalon = $("#nosalon").val();
        var disponilidad = $("#disponible").val();
        var disponible:boolean;
        console.log(disponilidad);
        if(disponilidad=="Si"){
          console.log("toy free");
          disponible=true;
        }
        if(disponilidad=="No"){
          console.log("no toy free");
          disponible=false;
        }
        camaService.sendData(nocama, tipocama, nosalon, disponible);
      });
    })

    $(document).ready(function() {
      $(".editTable").on('click',function() {
        var $row = $(this).closest("tr");    // Find the row
        var nocama = $row.find("td:eq(0)").text(); // Find the text
        var tipo=$row.find("td:eq(1)").text();
        var nosalon=$row.find("td:eq(2)").text();
        var disponibilidad=$row.find("td:eq(3)").text();
        llavePrimaria=nocama;
        console.log(nocama);
        $("#nocamaModif").val(nocama);
        $("#tipocamaModif").val(tipo);
        $("#nosalonModif").val(nosalon);
        $("#disponibleModif").val(disponibilidad );
      });
    })
    
    /** Proyecto 2 Bases de Datos: Hospital TECNológico
        Vista de gestion de camas.
        Objetivo: Modificar una cama
        Autor-Autora: Tatiana.
        Entradas:noCama, tipo, noSalon, disponilidad 
     */
    $(document).ready(function () {
      $("#sendModifiedBed").click(function () {
        var nocama = $("#nocamaModif").val();
        var tipo = $("#tipocamaModif").val();
        
        var tipocama:string;
        console.log(tipo);
        if(tipo=="Normal"){
          tipocama="Normal";
        }
        if(tipo=="UCI"){
          tipocama="UCI";
        }

        var nosalon = $("#nosalonModif").val();

        var disponilidad = $("#disponibleModif").val();
        var disponible:boolean;
        console.log(disponilidad);
        if(disponilidad=="Si"){
          disponible=true;
        }
        if(disponilidad=="No"){
          disponible=false;
        }
        camaService.modificar(llavePrimaria,nocama, tipocama, nosalon, disponible);
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
        $("#sendDeletedBed").click(function () {
          var $row = $(this).closest("tr");    // Find the row
          console.log(llavePrimaria);
          camaService.delete(llavePrimaria);
        });
      })

      
  }

}
