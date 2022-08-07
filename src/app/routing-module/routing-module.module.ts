import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewMemberComponent } from '../new-member/new-member.component';
import { MovieSearchLayoutComponent } from '../movie-search-layout/movie-search-layout.component';
import { MainPageLayoutComponent } from '../main-page-layout/main-page-layout.component';
import { MovieRentLayoutComponent } from '../movie-rent-layout/movie-rent-layout.component';



const routes: Routes = [
  { path: '', redirectTo: '/mainPage', pathMatch: 'full' },
  { path: 'mainPage', component:  MainPageLayoutComponent},
    { path: 'newMember', component:  NewMemberComponent},
    { path: 'movieSearch', component:  MovieSearchLayoutComponent},
    { path: 'movieRent', component:  MovieRentLayoutComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModuleModule { }
