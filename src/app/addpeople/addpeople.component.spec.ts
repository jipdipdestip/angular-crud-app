import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpeopleComponent } from './addpeople.component';

describe('AddpeopleComponent', () => {
  let component: AddpeopleComponent;
  let fixture: ComponentFixture<AddpeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpeopleComponent]
    });
    fixture = TestBed.createComponent(AddpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
