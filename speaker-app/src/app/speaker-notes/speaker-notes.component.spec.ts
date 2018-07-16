import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerNotesComponent } from './speaker-notes.component';

describe('SpeakerNotesComponent', () => {
  let component: SpeakerNotesComponent;
  let fixture: ComponentFixture<SpeakerNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
