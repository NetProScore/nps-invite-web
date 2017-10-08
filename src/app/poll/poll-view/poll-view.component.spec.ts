import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PollViewComponent} from './poll-view.component';

describe('PollViewComponent', () => {
  let component: PollViewComponent;
  let fixture: ComponentFixture<PollViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PollViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
