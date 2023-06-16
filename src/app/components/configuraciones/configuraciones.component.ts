import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { TestService } from 'src/app/services/test.service';
declare var spectrum:any;
declare var $:any;

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {

  public token = localStorage.getItem('token');
  public op = 1;
  public config:any = {};
  public str_portada:any = 'assets/white.jpg';
  public logo:any = undefined;
  public url = GLOBAL.url;
  
  public config_finanza:any = {};

  constructor(
    private _configuracionesService:TestService
  ){}

  ngOnInit(): void {
    this.init_data();
    this.init_data_finanza();
  }

  init_data(){
    this._configuracionesService.obtener_configuracion_general(this.token).subscribe(
      response=>{
        this.config = response.data;
        this.str_portada = this.url + 'get_image_config/'+this.config.logo;
        setTimeout(()=>{
          //INICIALIZACIÓN DE LA LIBRERÍA
          $('#color-picker').spectrum({
              type: "component",
              color: this.config.background
          });
        },150);
      }
    );
  }

  init_data_finanza(){
    this._configuracionesService.obtener_configuracion_finanza(this.token).subscribe(
      response=>{
        this.config_finanza = response.data;
        
      }
    );
  }

  set_op(value:any){
    this.op = value;
  }

  fileEventChange(event:any):void{
    
    var file:any;

    if (event.target.files && event.target.files[0]) {
      file = <File>event.target.files[0];
      console.log(file);
      
      if (file.size <= 2000000) {
        if(file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg'){
          this.logo = file;
          this.config.logo = this.logo;

          const reader = new FileReader();
          reader.onload = e => this.str_portada = reader.result;
          reader.readAsDataURL(file);
          
        }else{
          $.notify('Solo se permite la selección de imágenes.', { 
            type: 'danger',
            spacing: 10,                    
            timer: 2000,
            placement: {
                from: 'top', 
                align: 'right'
            },
            delay: 1000,
            animate: {
                enter: 'animated ' + 'bounce',
                exit: 'animated ' + 'bounce'
            }
          });
          this.logo = undefined;
        }
      }else{
        $.notify('La imagen no debe superar los 2 MB', { 
          type: 'danger',
          spacing: 10,                    
          timer: 2000,
          placement: {
              from: 'top', 
              align: 'right'
          },
          delay: 1000,
          animate: {
              enter: 'animated ' + 'bounce',
              exit: 'animated ' + 'bounce'
          }
        });
        this.logo = undefined;
      }
    }
    
  }

  update(){
    this.config.logo = this.logo;
    this.config.background = $('#color-picker').spectrum('get').toHexString();
    if(!this.config.razon_social){
      $.notify('Ingrese la Razón Social de la compañía.', { 
        type: 'danger',
        spacing: 10,                    
        timer: 2000,
        placement: {
            from: 'top', 
            align: 'right'
        },
        delay: 1000,
        animate: {
            enter: 'animated ' + 'bounce',
            exit: 'animated ' + 'bounce'
        }
      });
    }else if(!this.config.slogan){
      $.notify('Ingrese el slogan.', { 
        type: 'danger',
        spacing: 10,                    
        timer: 2000,
        placement: {
            from: 'top', 
            align: 'right'
        },
        delay: 1000,
        animate: {
            enter: 'animated ' + 'bounce',
            exit: 'animated ' + 'bounce'
        }
      });
    }else if(!this.config.background){
      $.notify('Seleccione el color del panel.', { 
        type: 'danger',
        spacing: 10,                    
        timer: 2000,
        placement: {
            from: 'top', 
            align: 'right'
        },
        delay: 1000,
        animate: {
            enter: 'animated ' + 'bounce',
            exit: 'animated ' + 'bounce'
        }
      });
    }else if(!this.config.categorias){
      $.notify('Ingrese las categorías.', { 
        type: 'danger',
        spacing: 10,                    
        timer: 2000,
        placement: {
            from: 'top', 
            align: 'right'
        },
        delay: 1000,
        animate: {
            enter: 'animated ' + 'bounce',
            exit: 'animated ' + 'bounce'
        }
      });
    }else if(!this.config.canales){
      $.notify('Ingrese los canales.', { 
        type: 'danger',
        spacing: 10,                    
        timer: 2000,
        placement: {
            from: 'top', 
            align: 'right'
        },
        delay: 1000,
        animate: {
            enter: 'animated ' + 'bounce',
            exit: 'animated ' + 'bounce'
        }
      });
    }else{
      this._configuracionesService.actualizar_configuracion_general_admin(this.config, this.token).subscribe(
        response=>{
          $.notify('Se actualizó los cambios.', { 
            type: 'success',
            spacing: 10,                    
            timer: 2000,
            placement: {
                from: 'top', 
                align: 'right'
            },
            delay: 1000,
            animate: {
                enter: 'animated ' + 'bounce',
                exit: 'animated ' + 'bounce'
            }
          });
          this.init_data();
        }
      )
    }
  }

  update_finanza(){
    if(!this.config_finanza.ganancia_producto){
      $.notify('Debe ingresar el margen de ganancia.', { 
        type: 'danger',
        spacing: 10,                    
        timer: 2000,
        placement: {
            from: 'top', 
            align: 'right'
        },
        delay: 1000,
        animate: {
            enter: 'animated ' + 'bounce',
            exit: 'animated ' + 'bounce'
        }
      });
    }else{
      this._configuracionesService.actualizar_configuracion_finanza_admin(this.config_finanza, this.token).subscribe(
        response=>{
          $.notify('Se actualizó los cambios.', { 
            type: 'success',
            spacing: 10,                    
            timer: 2000,
            placement: {
                from: 'top', 
                align: 'right'
            },
            delay: 1000,
            animate: {
                enter: 'animated ' + 'bounce',
                exit: 'animated ' + 'bounce'
            }
          });
          this.init_data_finanza();
        }
      )
    }
  }
}
