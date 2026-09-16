import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProgrammes } from './page-programmes';

describe('PageProgrammes', () => {
  let component: PageProgrammes;
  let fixture: ComponentFixture<PageProgrammes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProgrammes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProgrammes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
