import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeckOverviewPage } from './deck-overview.page';

describe('DeckOverviewPage', () => {
  let component: DeckOverviewPage;
  let fixture: ComponentFixture<DeckOverviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
