import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicItemComponent } from './characteristic-item.component';

describe('CharacteristicItemComponent', () => {
  let component: CharacteristicItemComponent;
  let fixture: ComponentFixture<CharacteristicItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacteristicItemComponent]
    });
    fixture = TestBed.createComponent(CharacteristicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
