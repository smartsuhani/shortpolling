import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortPollComponent } from './short-poll.component';

describe('ShortPollComponent', () => {
  let component: ShortPollComponent;
  let fixture: ComponentFixture<ShortPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
