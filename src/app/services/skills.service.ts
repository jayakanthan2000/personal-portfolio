import { Injectable } from '@angular/core';
import { LanguageInfo } from '../interface/language-info';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  data: any;

  constructor() { }

  getSkills(): LanguageInfo {
    this.data = [
              [
                {'language':'Typescript','svg':"../../assets/img/skills/typescript.svg"},
                {'language':'HTML','svg':"../../assets/img/skills/html.svg"},
                {'language':'CSS','svg':"../../assets/img/skills/css.svg"},
                {'language':'Bootstrap','svg':"../../assets/img/skills/bootstrap.svg"},
                {'language':'Angular','svg':"../../assets/img/skills/angular.svg"},
                {'language':'Node','svg':"../../assets/img/skills/nodejs.svg"},
                {'language':'Express','svg':"../../assets/img/skills/express.svg"},
                {'language':'Postgresql','svg':"../../assets/img/skills/postgresql.svg"},
                {'language':'Github','svg':"../../assets/img/skills/github.svg"}
              ]
    ];
    return this.data;

    
  }

}
