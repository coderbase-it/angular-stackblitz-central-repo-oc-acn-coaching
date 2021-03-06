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
      'angular-simple-routes',
      'routes / child Routes / Lazy loading',
      Category.ANGULAR
    ),
    new Lien(
      'angular-kingdom-dynamic-components-coderbase',
      'Angular ng-content / ng-template / dynamic component ๐ฆ ๐ ',
      Category.ANGULAR
    ),
    new Lien(
      'angular-content-projection-table-use-case',
      'Reusable Table ng-content use case ๐งพ',
      Category.ANGULAR
    ),
    new Lien('angular-css-part', 'Css basic with Angular ๐', Category.ANGULAR),
    new Lien(
      'https://miro.medium.com/max/691/1*-e5Kw0GqjPq5Xs-cjPm7Ww.jpeg',
      ' Cascading Style Sheets Specificity ๐ ',
      Category.SITE
    ),
    new Lien(
      'angular-control-accessor-form-elements',
      'Form nested component with Control value accessor ๐',
      Category.ANGULAR
    ),
    new Lien(
      'angular-routes-layout-management',
      'Shell management with route ๐ฎ',
      Category.ANGULAR
    ),
    new Lien(
      'angular-repeat-scenario',
      'Repeat Scenario route with service logic  โ',
      Category.ANGULAR
    ),
    new Lien(
      'https://github.com/coderbase-it/jest-test-app',
      'Jest Test App',
      Category.GITHUB
    ),
    new Lien(
      'angular-fruit-ninja-cd-challenge',
      'Challenge ChangeDetection Fruit Ninja ๐ฅญ๐๐๐',
      Category.ANGULAR
    ),
    new Lien(
      'angular-fruit-ninja-cd-challenge-solution',
      'Challenge ChangeDetection Fruit Ninja ๐ฅญ๐๐๐ (Solution)',
      Category.ANGULAR
    ),
    new Lien(
      'angular-ivy-why-not-bind-fn',
      'Why we should not bind a Function directly in HTML โ',
      Category.ANGULAR
    ),
    new Lien(
      'https://github.com/coderbase-it/external-http-environment-config',
      'External http environment config โ',
      Category.GITHUB
    ),
    new Lien(
      'https://github.com/coderbase-it/library-and-angular-element',
      'Angular Library and Angular Elements โ',
      Category.GITHUB
    ),
    new Lien(
      'angular-npz5w5',
      'Aquilla Simple ReactiveForm Circle ',
      Category.ANGULAR
    ),
    new Lien(
      'angular-yt3nnq',
      'CVA nested form component Aquila Circle',
      Category.ANGULAR
    ),
    new Lien(
      'rxjs-ko5owt',
      'Rxjs challenge rearrange post lists',
      Category.RXJS
    ),
    new Lien(
      'rxjs-yzy1yx',
      'Rxjs challenge rearrange post lists Solution',
      Category.RXJS
    ),

    new Lien(
      'angular-ivy-xrkfbd',
      'jsonPlaceholder SwitchMap/Pluck/debounceTime',
      Category.RXJS
    ),
    new Lien('https://rxmarbles.com/', ' RxMarbles', Category.SITE),
    new Lien('typescript-wfopdb', 'Typescript examples', Category.TYPESCRIPT)
  ];

  constructor() {}

  //custom operator usage
  get list() {
    return from(this.liens).pipe(customOp());
  }
}
