import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignDetailPage } from './sign-detail.page';

describe('SignDetailPage', () => {
  let component: SignDetailPage;
  let fixture: ComponentFixture<SignDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
