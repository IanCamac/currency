import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class UsdComponent implements OnInit {
  @Input() usd: string = '';
  @Output() usdEnviar: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  value(e: any) {
    const dollar = (e * 115.00) / 1;
    this.usdEnviar.emit(dollar);
  }
}
