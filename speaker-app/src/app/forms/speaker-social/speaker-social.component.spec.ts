import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSocialComponent } from './speaker-social.component';

describe('SpeakerSocialComponent', () => {
  let component: SpeakerSocialComponent;
  let fixture: ComponentFixture<SpeakerSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
