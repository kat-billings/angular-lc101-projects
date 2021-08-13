import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperientsComponent } from './experients.component';

describe('ExperientsComponent', () => {
  let component: ExperientsComponent;
  let fixture: ComponentFixture<ExperientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
