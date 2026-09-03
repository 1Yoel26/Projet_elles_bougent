import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteBoutonRose } from './texte-bouton-rose';

describe('TexteBoutonRose', () => {
  let component: TexteBoutonRose;
  let fixture: ComponentFixture<TexteBoutonRose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexteBoutonRose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexteBoutonRose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
