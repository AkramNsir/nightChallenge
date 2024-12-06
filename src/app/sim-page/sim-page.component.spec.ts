import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimPageComponent } from './sim-page.component';

describe('SimPageComponent', () => {
  let component: SimPageComponent;
  let fixture: ComponentFixture<SimPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimPageComponent]
    });
    fixture = TestBed.createComponent(SimPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
