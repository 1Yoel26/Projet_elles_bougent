import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniContaineurAccueil } from './mini-containeur-accueil';

describe('MiniContaineurAccueil', () => {
  let component: MiniContaineurAccueil;
  let fixture: ComponentFixture<MiniContaineurAccueil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniContaineurAccueil],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniContaineurAccueil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
