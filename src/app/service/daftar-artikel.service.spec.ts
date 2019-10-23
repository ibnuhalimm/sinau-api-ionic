import { TestBed } from '@angular/core/testing';

import { DaftarArtikelService } from './daftar-artikel.service';

describe('DaftarArtikelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaftarArtikelService = TestBed.get(DaftarArtikelService);
    expect(service).toBeTruthy();
  });
});
