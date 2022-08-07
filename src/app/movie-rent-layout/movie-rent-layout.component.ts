import { Component, OnInit } from '@angular/core';
import { RnsServiceService } from '../rns-service.service';

@Component({
  selector: 'app-movie-rent-layout',
  templateUrl: './movie-rent-layout.component.html',
  styleUrls: ['./movie-rent-layout.component.scss']
})
export class MovieRentLayoutComponent implements OnInit {
  selectedItemsList: any;
  checkedIDs=[];
  Renting=[];
  totalAmount :number=0;

  constructor(private rns:RnsServiceService) { }
  selectedObject;
  jsondata: any;
  memberName :String;
  memberType :String;
  movieDetails;
 members:any;
 isModal:boolean=false;
 isContainer:boolean=false;
 istotal:boolean=false;
  //getting json data while component gets initialized
  ngOnInit() {
    this.rns.getJSON().subscribe(
      data =>{
        
        this.jsondata=data;
        console.log(this.jsondata);
        this.members=this.jsondata.members;
        this.movieDetails=this.jsondata.movieSearch;
        this.Renting=this.jsondata.Renting;
      },
      (err)=>{
        console.log("error");
      }
    )
  }
  //getting details of Member based on mobile number
  searchMember(value){
    this.isContainer =!this.isContainer;
    this.selectedObject = this.members.filter(x => x.Number == value);
    console.log(this.selectedObject);
    this.memberName=this.selectedObject[0].Name;

    this.memberType=this.selectedObject[0].memberType;
  }
  //show modal on click of add more button to select the movie to display in selected div
  showModal(){
    this.isModal=!this.isModal
  }
  //display checked movie to checking movie name and calculate total amount
  isChecked() {
    this.isModal=!this.isModal
    var t = this.movieDetails
    .filter(opt => opt.checked)
    .map(opt => opt);
  this.checkedIDs = t;
  console.log(this.checkedIDs);
  this.istotal=!this.istotal;
  for(let data of this.checkedIDs){
    this.totalAmount += data.amount ;
    console.log(this.totalAmount);
  }
 }
  }
