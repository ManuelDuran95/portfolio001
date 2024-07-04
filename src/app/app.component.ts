import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 100);

    AOS.init();
    window.addEventListener('load',AOS.refresh);
  }
  
}
