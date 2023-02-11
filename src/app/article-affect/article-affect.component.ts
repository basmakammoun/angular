import { Component } from '@angular/core';
import { Member } from 'src/model/Member';
import { MemberServiceService } from '../member-service.service';

@Component({
  selector: 'app-article-affect',
  templateUrl: './article-affect.component.html',
  styleUrls: ['./article-affect.component.css']
})
export class ArticleAffectComponent {
selected:String="";
tab:Member[]=[];
constructor(private MemberService:MemberServiceService){
this.tab=this.MemberService.tab;
}
}
