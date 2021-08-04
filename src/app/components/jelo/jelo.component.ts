import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-jelo',
  templateUrl: './jelo.component.html',
  styleUrls: ['./jelo.component.scss']
})
export class JeloComponent implements OnInit {

  @Input() jelo : any;
  @Output() eventIzJelo : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.eventIzJelo.emit("bok")
  }

}
