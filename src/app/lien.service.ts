import { Injectable } from '@angular/core';
import { Lien } from './lien';
import { Category } from './category.enum';
import { from } from 'rxjs';
import { customOp } from './custom-operator';

@Injectable()
export class LienService {
  // add your links in this array
  // by using Lien class
  // new Lien('endOfStackblitz URL', 'NAME', Category.XXXX)
  // check category.enum for Category Attribute
  // order doesn't matter
  liens: Lien[] = [
    new Lien(
      'angular-kingdom-dynamic-components-coderbase',
      'Angular ng-content / ng-template / dynamic component 🦄 🐉 ',
      Category.ANGULAR
    ),
    new Lien(
      'angular-control-accessor-form-elements',
      'Form nested component with Control value accessor 📝',
      Category.ANGULAR
    )
  ];

  constructor() {}

  // Don't touch this function until u know RXJS enough
  get list() {
    return from(this.liens).pipe(customOp());
  }
}
