import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RnsServiceService } from '../rns-service.service';

  

@Component({
  selector: 'app-movie-search-layout',
  templateUrl: './movie-search-layout.component.html',
  styleUrls: ['./movie-search-layout.component.scss']
})
export class MovieSearchLayoutComponent implements OnInit {
  @ViewChild('myDropDownList') myDropDownList: ElementRef;
  available: any;
  not_available: string;
  memberName: string;
  constructor(private rns:RnsServiceService,private route: Router ) { }
  languages=[];
  jsondata: any;
  selectedObject;
  public movieDetails:any;
  movieDetails1:any;
  url="www.youtube.com";
  
  //getting json data while component gets initialized
  ngOnInit() {
    this.rns.getJSON().subscribe(
      data =>{
        
        this.jsondata=data;
        console.log(this.jsondata);
        this.languages=this.jsondata.language;
        this.movieDetails=this.jsondata.movieSearch;
        this.movieDetails1=this.jsondata.movieSearch;
        console.log(this.movieDetails);
        this.memberName=sessionStorage.getItem('memberName');
      },
      (err)=>{
        console.log("error");
      }
    )
  }
 //Movie details gets filtered out based on selected Language
  update(e){
  
  const selectedValue = this.myDropDownList.nativeElement.value;
  console.log(selectedValue);
  this.selectedObject = this.movieDetails1.filter(x => x.language == selectedValue);
  console.log(this.selectedObject);
  this.movieDetails=this.selectedObject;
  }
  movieRent(){
    this.route.navigate(['/movieRent']);
  }

  continue(e){

    window.location.href = 'https://www.youtube.com';
  
}
}
