import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  usd = '';
  yen = ''
  recibirYen(value: any) {
    console.log('RECIBI ',value);
    this.usd = value;
  }
  recibirUsd(value: any) {
    this.yen = value
  }
}
