import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRentLayoutComponent } from './movie-rent-layout.component';

describe('MovieRentLayoutComponent', () => {
  let component: MovieRentLayoutComponent;
  let fixture: ComponentFixture<MovieRentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
