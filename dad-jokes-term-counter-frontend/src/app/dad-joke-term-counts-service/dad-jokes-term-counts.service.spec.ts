import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DadJokesTermCountsService } from './dad-jokes-term-counts.service';

describe('DadJokesTermCountsService', () => {
  let service: DadJokesTermCountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DadJokesTermCountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
