import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEntreprise } from './page-entreprise';

describe('PageEntreprise', () => {
  let component: PageEntreprise;
  let fixture: ComponentFixture<PageEntreprise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEntreprise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEntreprise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
