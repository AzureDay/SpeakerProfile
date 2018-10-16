import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSessionsComponent } from './speaker-sessions.component';

describe('SpeakerSessionsComponent', () => {
  let component: SpeakerSessionsComponent;
  let fixture: ComponentFixture<SpeakerSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
