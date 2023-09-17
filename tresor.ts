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
 
   //todo Gegenstand hinzufügen (addGegenstand)
   /**
    * Da gegenstaende ein Array ist und keine ArrayList,
    * wird zum Hinzufügen anstelle der Methode add()
    * die Methode push() benötigt!
   
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