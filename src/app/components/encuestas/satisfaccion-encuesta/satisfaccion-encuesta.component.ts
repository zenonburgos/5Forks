import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jwt_decode from "jwt-decode";
import { ClienteService } from 'src/app/services/cliente.service';

declare var $:any;

@Component({
  selector: 'app-satisfaccion-encuesta',
  templateUrl: './satisfaccion-encuesta.component.html',
  styleUrls: ['./satisfaccion-encuesta.component.css']
})
export class SatisfaccionEncuestaComponent implements OnInit {

  public token_route = '';
  public data:any = {};
  public expiracion = false;
  public send = false;

  public answer_one = '';
  public answer_two = '';
  public answer_three = '';
  public answer_four = '';
  public answer_five = '';
  public answer_six = '';
  
  constructor(
    private _route:ActivatedRoute,
    private _clienteService:ClienteService
  ){}
  
  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{   

        this.token_route = params['token'];
        this.data = jwt_decode(this.token_route);
        
        let today_timespamps = Date.parse(new Date().toString())/1000;
        if(today_timespamps > this.data.exp){
          console.log('Expiró');
          this.expiracion = true;
        }else{
          console.log('Vigente');
          this.expiracion = false;
        }
      }
    )
  }

  enviar_encuesta(){
    if(!this.answer_one){
      $.notify('Por favor responda la pregunta 1.', { 
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
    }else if(!this.answer_two){
      $.notify('Por favor responda la pregunta 2.', { 
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
    }else if(!this.answer_three){
      $.notify('Por favor responda la pregunta 3.', { 
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
    }else if(!this.answer_four){
      $.notify('Por favor responda la pregunta 4.', { 
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
    }else if(!this.answer_five){
      $.notify('Por favor responda la pregunta 5.', { 
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
    }else if(!this.answer_six){
      $.notify('Por favor responda la pregunta 6.', { 
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
      let data = {
        answer_one: this.answer_one,
        answer_two: this.answer_two,
        answer_three: this.answer_three,
        answer_four: this.answer_four,
        answer_five: this.answer_five,
        answer_six: this.answer_six,
        matricula: this.data.matricula,
        cliente: this.data.cliente,
      }

      this._clienteService.enviar_encuesta_admin(data).subscribe(
        response=>{
          if(response.data != undefined){
            $.notify('SE ENVIÓ LA ENCUESTA CORRECTAMENTE.', { 
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
            this.send = true;
          }else{
            $.notify(response.message, { 
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
          }
        }
      );
    }

  }

}
