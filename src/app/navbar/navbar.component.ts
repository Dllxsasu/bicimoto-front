import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu: any;
  navLeft: any;
  navOpen: any;
  navClose: any;
  navBar: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.menu = document.querySelector('.menu');
    this.navOpen = document.querySelector('.hamburger');
    this.navClose = document.querySelector('.close');
    this.navBar = document.querySelector('.nav');
    this.navLeft = this.menu.getBoundingClientRect().left;
    
    this.navOpen.addEventListener("click", () => {
      if (this.navLeft < 0) {
        this.menu.classList.add("show");
        document.body.classList.add("show");
        this.navBar.classList.add("show");
      }
    });


    this.navClose.addEventListener("click", () => {
      if (this.navLeft < 0) {
        this.menu.classList.remove("show");
        document.body.classList.remove("show");
        this.navBar.classList.remove("show");
      }
    });
  }

  botonAbrirCerrar() {

   
  }
}
