import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {

  bezeichnung: String;
  constructor(id: number, wert: number, bezeichnung: String) {
	super(id, wert);
  this.bezeichnung = bezeichnung;
  }
  
  toString(): string {
    return "Schmuk{" + 
    "bezeichnung='" + this.bezeichnung + '\'' +
    '}';
  }

}