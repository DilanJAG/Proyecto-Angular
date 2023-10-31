import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopagesFoundComponent } from './nopages-found.component';

describe('NopagesFoundComponent', () => {
  let component: NopagesFoundComponent;
  let fixture: ComponentFixture<NopagesFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NopagesFoundComponent]
    });
    fixture = TestBed.createComponent(NopagesFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
