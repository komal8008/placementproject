import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlamsgComponent } from './plamsg.component';

describe('PlamsgComponent', () => {
  let component: PlamsgComponent;
  let fixture: ComponentFixture<PlamsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlamsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlamsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
