import { Component } from '@angular/core';
import { TestService } from './services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'panel';
  constructor(
    private _testService:TestService,
    private _router:Router
  ){

  }

  ngOnInit(): void {
    this._testService.verificar_token(localStorage.getItem('token')).subscribe(
      response=>{
        
      },
      error=>{
        localStorage.clear();
        this._router.navigate(['/']);
      }
    )
  }
}
