import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-layout',
  templateUrl: './main-page-layout.component.html',
  styleUrls: ['./main-page-layout.component.scss']
})
export class MainPageLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addMember(){
  
    this.router.navigate(['/newMember']);
  }

  searchMovie(){
    
    this.router.navigate(['/movieSearch']);
  }
}
