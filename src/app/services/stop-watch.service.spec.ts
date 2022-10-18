import { TestBed } from '@angular/core/testing';

import { StopWatchService } from './stop-watch.service';

describe('StopWatchService', () => {
  let service: StopWatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StopWatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
