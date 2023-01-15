import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Member } from 'src/model/Member';
import { MemberServiceService } from '../member-service.service';
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {// 

  constructor (private memberService:MemberServiceService, private router:Router, private activatedRoute:ActivatedRoute){

  }
  currentItemID:String="";

  form:any;
  ngOnInit(): void {
    // test if routing of edit or create
    //get route active
    this.currentItemID = this.activatedRoute.snapshot.params["id"];
    console.log(this.currentItemID)
    if(!!this.currentItemID){//!! trouly
      this.memberService.getMemberByID(this.currentItemID).then((item1)=>{this.initForm(item1)});
    }else{
      this.initForm(null);
    }
    

  }
  /*
  initForm():void{
    this.form = new FormGroup({
      cin : new FormControl(null, [Validators.required]),
      name : new FormControl(null, [Validators.required]),
      cv : new FormControl(null, [Validators.required]),
      type : new FormControl(null, [Validators.required])
    })
  }*/
  initForm(member:any):void{
    if(!!member){
      this.form = new FormGroup({
        cin : new FormControl(member.cin, [Validators.required]),
        name : new FormControl(member.name, [Validators.required]),
        cv : new FormControl(member.cv, [Validators.required]),
        type : new FormControl(member.type, [Validators.required])
      })
    }else{
      this.form = new FormGroup({
        cin : new FormControl(null, [Validators.required]),
        name : new FormControl(null, [Validators.required]),
        cv : new FormControl(null, [Validators.required]),
        type : new FormControl(null, [Validators.required])
      })
    }

    
  }
  onsub():void{
    //recupruration et affichage des formulaire.
    console.log(this.form.value);
    const ObjectToSubmit = this.form.value;
    
    this.memberService.saveMember(ObjectToSubmit).then(()=>{this.router.navigate(["/members"])});
  }

}
