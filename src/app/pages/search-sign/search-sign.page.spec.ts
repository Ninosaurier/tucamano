import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchSignPage } from './search-sign.page';

describe('SearchSignPage', () => {
  let component: SearchSignPage;
  let fixture: ComponentFixture<SearchSignPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
