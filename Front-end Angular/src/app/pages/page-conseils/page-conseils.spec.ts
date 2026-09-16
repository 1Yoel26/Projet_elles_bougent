import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConseils } from './page-conseils';

describe('PageConseils', () => {
  let component: PageConseils;
  let fixture: ComponentFixture<PageConseils>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConseils]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConseils);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
