import { Injectable } from '@angular/core';
import { GLOBAL } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
tab_articles = GLOBAL._DB.Articles;
  constructor() { }
}
