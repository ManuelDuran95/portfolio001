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
    
    this.show=!this.show;

  }

  // Ejemplo en tu componente
elementoActivo: string = 'inicio';  // Inicializa la propiedad

seleccionarElemento(elemento: string) {
  this.elementoActivo = elemento;
  // Aquí puedes realizar otras acciones necesarias cuando se selecciona un elemento
}
cerrarNAV(){
  console.log("fsds")
}
 

}
