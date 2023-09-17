import { Gegenstand } from "../tresorTypescriptVorlage/gegenstand";

export abstract class Aktie extends Gegenstand {
  
  unternehmen: string;
  nennwert: number; 

    constructor(id: number, wert: number, unternehmen: string, nennwert: number) {
      super(id, wert);
      this.unternehmen = unternehmen;
      this.nennwert = nennwert;
    }

    get Unternehmen(): string {
      return this.unternehmen;
    }

    set Unternehmen(unternehmen: string){
      this.unternehmen= unternehmen; 
    }

    get Nennwert(): number {
      return this.nennwert;
    }

    set Nennwert(nennwert: number){
      this.nennwert= nennwert;
    }


    toString(): string {

      return "Aktie{" + 
      "unternehmen='" + this.unternehmen + '\'' +
      ", nennwert='" + this.nennwert+ + '\'' +
      '}';
    }
    
  }