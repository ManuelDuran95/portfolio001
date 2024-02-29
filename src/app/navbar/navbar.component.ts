import { Component } from '@angular/core';
declare const $: any; // Declara la variable global $ para jQuery

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  show:boolean=true;

  hideMenu(){
    console.log("sjnfd")
    this.show=!this.show;

  }
 

}
