import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidrightComponent } from './midright.component';

describe('MidrightComponent', () => {
  let component: MidrightComponent;
  let fixture: ComponentFixture<MidrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
