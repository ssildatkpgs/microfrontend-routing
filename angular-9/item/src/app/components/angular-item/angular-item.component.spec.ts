import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularItemComponent } from './angular-item.component';

describe('AngularItemComponent', () => {
  let component: AngularItemComponent;
  let fixture: ComponentFixture<AngularItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
