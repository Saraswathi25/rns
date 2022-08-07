import { Component, OnInit } from '@angular/core';
import {saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http'; 

import { Router } from '@angular/router';

interface Members {  
    
  name: String;  
  number: number;  
  
}  
@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent implements OnInit {
  
  constructor(private router: Router) {
   
   }

  ngOnInit() {
  }
 
  addMember(name,number){
    sessionStorage.setItem("memberName",name);
    sessionStorage.setItem("memberMobile",number);
    this.router.navigate(['/movieSearch']);
    // alert("added");
    // const jsonObj : object={
    //   'member':[
    //     {
    //       memberName:'sapna',
    //       memberMobile:'8870110909'
    //     },
    //     {
    //       memberName:'saru',
    //       memberMobile:'8870110908'
    //     }
    //   ]
    // };
    // const blob =new Blob ([JSON.stringify(jsonObj)], {type:'application/json'});
    // saveAs(blob, 'members.json');
}
}
