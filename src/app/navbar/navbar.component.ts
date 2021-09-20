import { Component, OnInit, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


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
  link1:boolean=true;
  link2:boolean=false;
  link3:boolean=false;
  link4:boolean=false;
  link5:boolean=false;
  url?:string;
  constructor(private route: Router) {
    
    console.log("la putamare")
    this.route.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.url=e.url;
        console.log(e.url);
      }
    });

   // this.linkCambio();
  }

  ngOnInit(): void {
    this.route.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.url=e.url;
        console.log(e.url);
        this.linkCambio();
      }
    });
   


  }


  linkCambio() {
    console.log("Entro al cambio" + this.url);
    if(this.url=="/inicio"){
      this.link1=true;
      this.link2=false;
      this.link3=false;
      this.link4=false;

    }
    else if(this.url=="/productos"){
      this.link2=true;
      this.link1=false;
      this.link3=false;
      this.link4=false;
    }else if(this.url=="/ubicanos"){
      this.link3=true;
      this.link2=false;
      this.link1=false;
      this.link4=false;
    }
    else if(this.url=="/nosotros"){
      this.link4=true;
      this.link2=false;
      this.link3=false;
      this.link1=false;
    }
    
    
  }

  ngAfterContentInit() {
    console.log(this.route.url);
    console.log("la putamare")
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
