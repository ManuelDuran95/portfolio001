import { Component, OnDestroy, OnInit } from '@angular/core';
import { TypingEfectService } from '../services/typing-efect.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrl: './view1.component.scss'
})
export class View1Component implements OnInit, OnDestroy{

  constructor(public typingEfectService: TypingEfectService){

  }
  texto:string='Full Stack Developer';
 myStrings = ["String 1", "String 2", "String 3", "String 4", "String 5"];

  ngOnInit(): void {
    this.typingEfectService.startTypingEffect();
  }
  ngOnDestroy(): void {
      this.typingEfectService.stopTypingEffect();
  }
  selectStringEvery5Seconds(strings: string[]): void {
    let index = 0;
  
    const intervalId = setInterval(() => {
      // Seleccionar el string actual
      const selectedString = strings[index];
  
      // Hacer algo con el string seleccionado (aquí simplemente lo imprimimos)
      console.log(selectedString);
  
      // Incrementar el índice para seleccionar el próximo string en el siguiente intervalo
      index++;
  
      // Si hemos llegado al final del array, reiniciamos el índice
      if (index === strings.length) {
        index = 0;
      }
  
    }, 5000); // 5000 milisegundos = 5 segundos
  
    // Puedes devolver el ID del intervalo si necesitas detenerlo más tarde
    // return intervalId;
  }
}