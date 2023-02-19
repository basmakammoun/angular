import { Injectable } from '@angular/core';
import { GLOBAL } from './app-config';
import { MemberServiceService } from './member-service.service';
import { Article } from 'src/model/Article';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  tab_articles = GLOBAL._DB.Articles;
  member_recuper: any;
  constructor(private MS: MemberServiceService) { }
  getArticleByID(curentId: string): Promise<Article> {
    return new Promise(resolve => resolve(this.tab_articles.filter(item => item.id_article === curentId)[0] ?? null))
  }
  affect(curentId: string, id_number: string): Promise<void> {
    this.MS.getMemberByID(id_number).then((x) => { this.member_recuper = x });
    this.getArticleByID(curentId).then((item) => { item.Author = this.member_recuper.name });
    return new Promise(resolve => resolve());
  }

  getAllArticle():Promise<Article[]>{
    
    return new Promise(resolve => resolve(this.tab_articles))
  }

}

