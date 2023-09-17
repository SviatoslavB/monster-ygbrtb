import { Gegenstand } from "./gegenstand";
import { GegenstandNichtGefundenError } from "./gegenstandNichtGefundenError";

export class Tresor {
  
  /**
   * Typ ArrayList (vgl. Java) nicht vorhanden --> Array verwenden!
   */
   private gegenstaende: Gegenstand[];

   constructor() {
     this.gegenstaende = new Array();
   }
 
   addGegenstand(gegenstand: Gegenstand): void{
     this.gegenstaende.push(gegenstand)
   }
   //todo Gegenstand hinzufügen (addGegenstand)
   /**
    * Da gegenstaende ein Array ist und keine ArrayList,
    * wird zum Hinzufügen anstelle der Methode add()
    * die Methode push() benötigt!
   */
    getGegenstand(id: number): Gegenstand {
      const foundGegenstand = this.gegenstaende.find(
        (gegenstand) => gegenstand.id === id
      );
  
      if (foundGegenstand) {
        return foundGegenstand;
      } else {
        throw new GegenstandNichtGefundenError();
      }
    

      
   }
    //todo Gegenstand finden (getGegenstand) 
   /**
    * Drei verschiedene Varianten des Durchsuchens des Arrays möglich:
    * a) forEach-Schleife --> in typescript 'for ... of'
    *    --> vgl. https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#forof-statements
    * b) for-Zählerschleife mit Iteration
    *    --> vergleichbar mit der Umsetzung in Java
	* c) Methode find() auf das Array anwenden [DIE MODERNSTE VARIANTE!]
    *    --> vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    */


  removeGegenstand(gegenstand: Gegenstand): void{
    const foundIndex = this.gegenstaende.findIndex(item => item.id === gegenstand.id);

    if (foundIndex === -1) {
      throw new GegenstandNichtGefundenError();
  }

  this.gegenstaende = this.gegenstaende.filter((item, index) => index !== foundIndex);
  }
   //todo Gegenstand aus Tresor nehmen (removeGegenstand)
   /**
    * 1. sinnvollerweise zunächst prüfen, ob der Gegenstand im Tresor ist
	  * (vgl. gewählte Variante für "Gegenstand finden", also für 'getGegenstand')
    * 2. wenn nicht gefunden, Fehler werfen (GegenstandNichtGefundenError),
    * ebenfalls wie in 'getGegenstand'
    * 3. Methode filter() auf das Array anwenden, um dieses neu aufzubauen
    * vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
    */

   berechneGesamtwert(): number {
     let summeWerte: number = 0;
     this.gegenstaende.forEach(g => summeWerte += g.wert);
     return summeWerte;
   }

   //todo toString
   toString(): string {
     let text: string = "LISTE DER GEGENSTÄNDE";
     //todo, vgl. forEach in berechneGesamtwert()
     return text;
   }

}