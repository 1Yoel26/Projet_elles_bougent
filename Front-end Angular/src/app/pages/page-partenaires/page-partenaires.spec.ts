import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePartenaires } from './page-partenaires';

describe('PagePartenaires', () => {
  let component: PagePartenaires;
  let fixture: ComponentFixture<PagePartenaires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePartenaires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePartenaires);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
