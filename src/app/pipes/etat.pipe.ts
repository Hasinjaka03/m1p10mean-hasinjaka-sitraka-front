import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etat'
})
export class EtatPipe implements PipeTransform {
  transform(etat: boolean): string {
    return etat ? 'Terminé' : 'En cours';
  }
}
