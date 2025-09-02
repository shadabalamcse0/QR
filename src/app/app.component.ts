import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,QRCodeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true
  
})
export class AppComponent {
 qrData : string = 'https://angular.dev'; //default value
}
