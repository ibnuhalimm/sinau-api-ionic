import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DaftarArtikelService } from '../service/daftar-artikel.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private artikelSubs: Subscription;
  artikelList: string[];

  constructor(
    private artikelSrv: DaftarArtikelService
  ) {}


  ngOnInit() {

    this.artikelSubs = this.artikelSrv.artikelChange.subscribe((artikel) => {
      this.artikelList = artikel;
    });

    this.artikelSrv.getDaftarArtikel();
    // console.log(this.artikelList);
  }


  ngOnDestroy() {
    this.artikelSubs.unsubscribe();
  }

}
