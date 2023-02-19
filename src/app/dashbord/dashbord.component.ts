import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { MemberServiceService } from '../member-service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{
  nb_Members : any;
  nb_Articles:any;
  constructor(private MS: MemberServiceService, private AS:ArticlesService){}
  ngOnInit(): void {
      this.MS.getAllMembers().then((item)=>{this.nb_Members=item.length});
      this.AS.getAllArticle().then((item)=>{this.nb_Articles=item.length});
  }
}
