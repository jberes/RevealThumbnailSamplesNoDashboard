import { TestBed } from '@angular/core/testing';

import { RevealDomDashboardsService } from './reveal-dom-dashboards.service';

describe('RevealDomDashboardsService', () => {
  let service: RevealDomDashboardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevealDomDashboardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
