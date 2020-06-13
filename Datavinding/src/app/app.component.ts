import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Datavinding';
  titulo: any = "Hola mundo";
  datos: any = { Nombre: "", Apellido: "", Edad: 0, Documento: "" };
  
  
  
  
  eventoBoton(){
    console.log('Evento Fundiconando');
    
  }
}
