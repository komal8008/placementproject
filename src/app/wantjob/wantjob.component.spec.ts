import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantjobComponent } from './wantjob.component';

describe('WantjobComponent', () => {
  let component: WantjobComponent;
  let fixture: ComponentFixture<WantjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
