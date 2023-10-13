import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSubmitComponent } from './success-submit.component';

describe('SuccessSubmitComponent', () => {
  let component: SuccessSubmitComponent;
  let fixture: ComponentFixture<SuccessSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessSubmitComponent]
    });
    fixture = TestBed.createComponent(SuccessSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
