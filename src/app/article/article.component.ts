import { Component } from '@angular/core';
import { Article } from 'src/model/Article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  dataSource : Article[];
  constructor(private As:ArticlesService){
    this.dataSource=this.As.tab_articles;
  }
  displayedColumns : string[] = ["id_article","title","Author","Annee","Action"];
}
