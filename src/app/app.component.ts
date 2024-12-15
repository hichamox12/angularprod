import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public currentRoute:any;
  
constructor(private router : Router){

  }
gotoProducts() : void{
  this.currentRoute="products";
  this.router.navigateByUrl('/products');

}
gotoHome() : void{
  this.currentRoute="home";
  this.router.navigateByUrl('/home');

}
  title = 'App';
}
