import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
//import { QRCodeComponent } from 'angularx-qrcode';
import { HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {QRCodeComponent } from 'angularx-qrcode';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,QRCodeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true
  
})
export class AppComponent {
 //qrData : string = 'https://angular.dev'; //default value

 guid: string | null = null;
 issuedAt: string | null = null;

 constructor(private http: HttpClient){}

 ngOnInit(): void {
    this.getGuidFromBackend(); // Auto fetch on load
  }

 getGuidFromBackend(){
  this.http.get<{ guid: string; issuedAt:string}>('http://localhost:3000/guid/new')
  .subscribe((res) =>{
    this.guid = res.guid;
    this.issuedAt = res.issuedAt;
  });
 }
}
