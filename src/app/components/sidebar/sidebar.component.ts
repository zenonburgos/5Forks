import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var KTLayoutAsideToggle:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  constructor(){}
  
  ngOnInit(): void {
    setTimeout(() => {
      KTLayoutAsideToggle.init('kt_aside_toggle');
    }, 50);
  }

  openModal(id:any){
    setTimeout(() => {
      var clase = $('#nav-'+id).attr('class');
      if(clase == 'menu-submenu'){
        $('#nav-'+id).removeAttr('class');
        $('#nav-'+id).attr('class','menu-submenu show');

        $('#nav-'+id).css({
          'display': 'flex',
          '-webkit-box-flex': '1',
          '-ms-flex-positive': '1',
          'flex-grow': '1',
          '-webkit-box-orient': 'vertical',
          '-webkit-box-direction': 'normal',
          '-ms-flex-direction': 'column',
          'flex-direction': 'column',
        });
      }else if(clase == 'menu-submenu show'){
        $('#nav-'+id).removeAttr('class');
        $('#nav-'+id).attr('class','menu-submenu');

        $('#nav-'+id).css({
          'display': 'none',
          'float': 'none',
          'margin': '0',
          'padding': '0',
        });
      }
      
    }, 50);
  }

}
