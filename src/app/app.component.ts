import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'first';

  isButtonDisabled : boolean = true;
  inputText = "Lol"
  varijablaIzAppKomponente = "lol"

  polje = [
    {
      id : 1,
      name : "Davor"
    },
    {
      id : 2,
      name : "Ivan"
    },
    {
      id : 3,
      name : "Sandro"
    },
    {
      id : 4,
      name : "Baxo"
    },
    {
      id : 5,
      name : "Zima"
    },
  ]

  constructor(){
    this.title = "novi naslov"
  }

  buttonClick(){
    this.isButtonDisabled = true;
  }

  eventIzKomponente(event : any){
    console.log(`Event iz komponente -> ${event}`)
  }

  clickNaKompunentu(){
    console.log("Click na komponentu")
  }


  onTextChanged(){
    console.log("lalala")
  }
}
