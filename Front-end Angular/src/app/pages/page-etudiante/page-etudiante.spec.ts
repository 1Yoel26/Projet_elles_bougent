import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEtudiante } from './page-etudiante';

describe('PageEtudiante', () => {
  let component: PageEtudiante;
  let fixture: ComponentFixture<PageEtudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEtudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEtudiante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
