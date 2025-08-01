import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditPage } from './credit.page';

describe('CreditPage', () => {
  let component: CreditPage;
  let fixture: ComponentFixture<CreditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
