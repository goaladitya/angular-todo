import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndbodyComponent } from './endbody.component';

describe('EndbodyComponent', () => {
  let component: EndbodyComponent;
  let fixture: ComponentFixture<EndbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
