import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchLayoutComponent } from './movie-search-layout.component';

describe('MovieSearchLayoutComponent', () => {
  let component: MovieSearchLayoutComponent;
  let fixture: ComponentFixture<MovieSearchLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
