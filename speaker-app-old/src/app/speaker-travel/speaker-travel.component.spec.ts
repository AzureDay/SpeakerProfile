import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerTravelComponent } from './speaker-travel.component';

describe('SpeakerTravelComponent', () => {
  let component: SpeakerTravelComponent;
  let fixture: ComponentFixture<SpeakerTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
