import { TestBed } from '@angular/core/testing';

import { ProducteServicexService } from './producte-servicex.service';

describe('ProducteServicexService', () => {
  let service: ProducteServicexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducteServicexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
