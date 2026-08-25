import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitrePage } from './titre-page';

describe('TitrePage', () => {
  let component: TitrePage;
  let fixture: ComponentFixture<TitrePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitrePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitrePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
