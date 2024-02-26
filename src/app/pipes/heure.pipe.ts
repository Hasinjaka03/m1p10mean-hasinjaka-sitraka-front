import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heure'
})
export class HeurePipe implements PipeTransform {
  transform(heure:number): string {
    const partieEntiere:number = Math.floor(heure); // Obtient la partie entière
    const partieDecimale:number = (heure - partieEntiere)*60; // Obtient la partie décimale
    let apres :string = '';
    let avant :string = '';
    if(partieDecimale != 0){
        apres = partieDecimale.toString() + 'min' ;
    }
    if(partieEntiere != 0){
      avant = partieEntiere.toString() + 'h' ;
  }
    const reponse :string =  avant + apres ;
    return reponse;
  }
}
