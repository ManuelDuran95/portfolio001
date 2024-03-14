import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  destinatario: string = '';
  asunto: string = '';
  mensaje: string = '';

  enviarCorreo() {
    // Aquí puedes agregar la lógica para enviar el correo utilizando un servicio o enviar los datos al backend
    console.log('Enviando correo:', this.destinatario, this.asunto, this.mensaje);
  }

}
