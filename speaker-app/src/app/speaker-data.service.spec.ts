import { TestBed, inject } from '@angular/core/testing';

import { SpeakerDataService } from './speaker-data.service';

describe('SpeakerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeakerDataService]
    });
  });

  it('should be created', inject([SpeakerDataService], (service: SpeakerDataService) => {
    expect(service).toBeTruthy();
  }));
});
