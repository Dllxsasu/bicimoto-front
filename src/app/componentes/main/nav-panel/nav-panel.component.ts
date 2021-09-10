import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Product } from './products';
import { ProductService } from './productService';

import { Productex } from 'src/app/shared/models/productex';
import { ProducteServicexService } from 'src/app/shared/service/producte-servicex.service';
@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent implements OnInit {

  products!: Productex[];
  responsiveOptions!: any ;

  carro!: Productex;
  mobile:boolean=false;
  constructor(private carouselservice: ProducteServicexService) {
    //slider responsive settings
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    //get request

  }
  ngOnInit() {
    this.carouselservice.getCarro().then(products => {
      this.products = products;
    });
  }
}

