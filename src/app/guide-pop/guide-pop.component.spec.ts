import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidePopComponent } from './guide-pop.component';

describe('GuidePopComponent', () => {
  let component: GuidePopComponent;
  let fixture: ComponentFixture<GuidePopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidePopComponent]
    });
    fixture = TestBed.createComponent(GuidePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
