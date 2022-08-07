import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageLayoutComponent } from './main-page-layout/main-page-layout.component';
import { HeaderComponent } from './header/header.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MovieSearchLayoutComponent } from './movie-search-layout/movie-search-layout.component';
import { MovieRentLayoutComponent } from './movie-rent-layout/movie-rent-layout.component';
import { RoutingModuleModule } from './routing-module/routing-module.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageLayoutComponent,
    
    HeaderComponent,
    NewMemberComponent,
    MovieSearchLayoutComponent,
    MovieRentLayoutComponent
  ],
  imports: [
    BrowserModule,
    
    RoutingModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
