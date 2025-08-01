import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DictionarySelectorPage } from './dictionary-selector.page';

describe('DictionarySelectorPage', () => {
  let component: DictionarySelectorPage;
  let fixture: ComponentFixture<DictionarySelectorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionarySelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
