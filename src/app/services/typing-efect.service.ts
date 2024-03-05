import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypingEfectService {
  private strings: string[] = ["Texto 1", "Texto 2", "Texto 3"]; // Tu array de strings
  public currentString: string = '';
  private currentIndex: number = 0;
  private typingInterval: any;

  constructor() { }
  startTypingEffect() {
    this.typingInterval = setInterval(() => {
      this.currentString = this.strings[this.currentIndex];
      this.currentIndex++;

      if (this.currentIndex === this.strings.length) {
        this.currentIndex = 0;
      }
    }, 2000); // Intervalo de 2 segundos, ajusta según tus necesidades
  }

  stopTypingEffect() {
    clearInterval(this.typingInterval);
  }
}
