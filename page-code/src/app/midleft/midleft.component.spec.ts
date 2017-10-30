import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidleftComponent } from './midleft.component';

describe('MidleftComponent', () => {
  let component: MidleftComponent;
  let fixture: ComponentFixture<MidleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
