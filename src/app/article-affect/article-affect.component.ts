import { Component } from '@angular/core';
import { Member } from 'src/model/Member';
import { MemberServiceService } from '../member-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-affect',
  templateUrl: './article-affect.component.html',
  styleUrls: ['./article-affect.component.css']
})
export class ArticleAffectComponent {
selected:string="";
tab:Member[]=[];
articleId:any;
constructor(private MemberService:MemberServiceService, private activatedRoute:ActivatedRoute, private router:Router , private articlesService : ArticlesService){
this.tab=this.MemberService.tab;
}
add(selected:string):void {
  this.articleId= this.activatedRoute.snapshot.params["id_article"];
  this.articlesService.affect(this.articleId,selected).then(()=>{this.router.navigate(['/articles'])})
}
}
