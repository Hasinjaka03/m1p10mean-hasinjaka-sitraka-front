import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heure'
})
export class HeurePipe implements PipeTransform {
  transform(heure:number): string {
    const partieEntiere:number = Math.floor(heure); // Obtient la partie entière
    const partieDecimale:number = (heure - partieEntiere)*60; // Obtient la partie décimale
    let apres :string = '';
    if(partieDecimale != 0){
        apres = partieDecimale.toString() ;
    }
    const reponse :string =  partieEntiere.toString() + 'h' + apres ;
    return reponse;
  }
}
