import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  
  products: Product[]= [];
  id:string="Asd";
  titulo:string= "papa";
  precio:number = 1;
  img:string="https://www.ecured.cu/images/1/14/1603480088968.jpg";
  precioVenta:number=2;
  marca:string="guita";
  
  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }
    cargarDatos(){
      var p1:Product={id:"asd", titulo:"12V Moto manillar fijo Flash doble interruptor conmutador de faro impermeable-Negro y rojo", precio:69.00, img:"https://i.linio.com/p/eea463344ee2e721fb43036355c850ad-product.webp",
      precioVenta:70, marca:"Generico"};
      var p2:Product={id:"asd", titulo:"1 par de puños esponja para manillar bici - Mango verde y a", precio:1, img:"https://i.linio.com/p/862e3f98f8bc02d619d27dcf8bea42b4-product.webp",
      precioVenta: 85.00, marca:"Generico "}; 
      var p3:Product={id:"asd", titulo:"Motocicleta Hidráulico Doble Banjo Borrado Freno Interruptor M10 x 1.25mm", precio:1, img:"https://i.linio.com/p/c56ec4adc1629a870a9b133ae5c8d149-product.webp",
      precioVenta:78.00, marca:"Generico"}; 
      var p4:Product={id:"asd", titulo:"Motocicleta asdasd dd  Banjo Borrado Freno Interruptor M10 x 1.25mm", precio:1, img:"https://i.linio.com/p/3321c8aa8acb38e45bf87d9651733d3c-catalog.webp",
      precioVenta:8.00, marca:"Generico"}; 
      var p5:Product={id:"asd", titulo:"Motocicleta asdasd dd  Banjo Borrado Freno Interruptor M10 x 1.25mm", precio:1, img:"https://i.linio.com/p/3321c8aa8acb38e45bf87d9651733d3c-catalog.webp",
      precioVenta:8.00, marca:"Generico"}; 
      this.products.push(p1);
      this.products.push(p2);
      this.products.push(p3);
      this.products.push(p4);
      console.log(this.products);
    }
}
