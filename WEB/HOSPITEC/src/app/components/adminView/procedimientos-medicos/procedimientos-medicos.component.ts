import { Component, AfterViewChecked , OnDestroy} from '@angular/core';
import {ProcedimientosService} from 'src/app/services/administracion/procedimientos.service'

declare var $: any;

@Component({
  selector: 'app-procedimientos-medicos',
  templateUrl: './procedimientos-medicos.component.html',
  styleUrls: ['./procedimientos-medicos.component.css']
})
export class ProcedimientosMedicosComponent  implements AfterViewChecked, OnDestroy {
  listaProcedimientos=[]
  constructor(private procedimientosService:ProcedimientosService) { }

  ngAfterViewChecked(): void {
    
    var procedService=this.procedimientosService;
    var llavePrimaria;
    
    this.procedimientosService.getProcedimientos().subscribe((procedimientos) =>{
    this.listaProcedimientos=procedimientos;})
    


      
    /* 
    Proyecto 2 Bases de Datos: Hospital TECNológico
    Vista Administracion.
    Objetivo: Crear procedimientos medicos, aqui se llama la funcion mediante la cual
    vamos a enviar los datos al api.
    Autor-Autora: Pablo.
    Entradas:nombre, recuperacionMinima
     */

    $(document).ready(function() {
      $("#sendCreatedProcedure").click(function() {
        var nombre=$("#nombre").val();
        var recuperacionMinima= $("#recuperacion").val();        
        procedService.sendData(nombre, recuperacionMinima);
      });
    })

    $(document).ready(function() {
      $(".editTable").on('click',function() {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKey = $row.find("td:eq(0)").text(); // Find the text
        var col2=$row.find("td:eq(1)").text();
        llavePrimaria=primaryKey;
        $("#nombreModificado").val(primaryKey);
        $("#recuperacionModificado").val(col2);

      });
    })

    $(document).ready(function() {
      $("#sendModifiedProcedure").click(function() {
        var nombre=$("#nombreModificado").val();
        var recuperacionMinima= $("#recuperacionModificado").val();
        procedService.modificar(nombre,recuperacionMinima ); 
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

      /* 
    Proyecto 2 Bases de Datos: Hospital TECNológico
    Vista Procedimientos Medicos.
    Objetivo: Llamar la funcion que envia la llave primaria al api de la entidad
    que queremos eliminar.
    Autor-Autora: Pablo.
    Entradas:llavePrimaria
     */
    $(document).ready(function() {
      $("#sendDeletedProcedure").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        console.log(llavePrimaria);
        procedService.delete(llavePrimaria);
      });
    })


  }
  ngOnDestroy(){

  }

  }