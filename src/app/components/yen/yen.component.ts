import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html',
  styleUrls: ['./yen.component.css']
})
export class YenComponent implements OnInit {
  @Input() yen = '';
  @Output() usd: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  value(e: any) {
    const val = (e * 0.0087) / 1;
    console.log(e)
    this.usd.emit(val);
  }

}
