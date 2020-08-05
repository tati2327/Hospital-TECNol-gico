import { Component, AfterViewChecked , OnDestroy } from '@angular/core';
import {PersonalService} from 'src/app/services/administracion/personal.service';

declare var $: any;

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements AfterViewChecked, OnDestroy {

  listaPersonal=[]
  constructor(private personalService:PersonalService) { }

  ngAfterViewChecked(): void {
    
    var personalService=this.personalService;
    var llavePrimaria;
    
    this.personalService.getPersonal().subscribe((personal) =>{
    this.listaPersonal=personal;})
    


      
    /* 
    Proyecto 2 Bases de Datos: Hospital TECNológico
    Vista Administracion.
    Objetivo: Crear procedimientos medicos, aqui se llama la funcion mediante la cual
    vamos a enviar los datos al api.
    Autor-Autora: Pablo.
    Entradas:nombre, recuperacionMinima
     */

    $(document).ready(function() {
      $("#sendCreatedPersonal").click(function() {
        var cedula=$("#cedula").val();
        var nombre=$("#nombre").val();
        var apellidos= $("#apellidos").val();   
        var telefono=$("#telefono").val();
        var nacimiento=$("#nacimiento").val();
        var direccion=$("#direccion").val();
        var ingreso=$("#ingreso").val();
        var puesto=$("#puesto").val();
        var contraseña=$("#contraseña").val();
        
        personalService.sendData(cedula, nombre,apellidos,telefono,nacimiento,direccion, ingreso,puesto,contraseña);
      });
    })

    $(document).ready(function() {
      $(".editTable").on('click',function() {
        var $row = $(this).closest("tr");    // Find the row
        var cedula = $row.find("td:eq(0)").text(); // Find the text
        var nombre=$row.find("td:eq(1)").text();
        var apellidos=$row.find("td:eq(2)").text();
        var telefono=$row.find("td:eq(3)").text();
        var nacimiento=$row.find("td:eq(4)").text();
        var direccion=$row.find("td:eq(5)").text();
        var ingreso=$row.find("td:eq(6)").text();
        var puesto=$row.find("td:eq(7)").text();
        
        llavePrimaria=cedula;
        
        $("#cedulaModif").val(cedula);
        $("#nombreModif").val(nombre);
        $("#apellidosModif").val(apellidos);
        $("#telefonoModif").val(telefono);
        $("#nacimientoModif").val(nacimiento);
        $("#direccionModif").val(direccion);
        $("#ingresoModif").val(ingreso);
        $("#puestoModif").val(puesto);
       

      });
    })

    $(document).ready(function() {
      $("#sendModifiedPersonal").click(function() {
        var cedula=$("#cedulaModif").val();
        var nombre=$("#nombreModif").val();
        var apellidos= $("#apellidosModif").val();   
        var telefono=$("#telefonoModif").val();
        var nacimiento=$("#nacimientoModif").val();
        var direccion=$("#direccionModif").val();
        var ingreso=$("#ingresoModif").val();
        var puesto=$("#puestoModif").val();
        
        personalService.modificar(llavePrimaria,cedula, nombre,apellidos,telefono,nacimiento,direccion, ingreso,puesto); 
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
      $("#sendDeletedPersonal").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        console.log(llavePrimaria);
        personalService.delete(llavePrimaria);
      });
    })


  }
  ngOnDestroy(){

  }

}
