import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Component({
  selector: 'app-bodyproductos',
  templateUrl: './bodyproductos.component.html',
  styleUrls: ['./bodyproductos.component.scss']
})
export class BodyproductosComponent implements OnInit {

  productos : Producto[] =
  [{
    marca : "Osaka",
    modelo : "GB1",
    precio : 16.00,
    ficha : "Material de Aluminio",
    imagen : "../../assets/GB1.jpg",
    //cat: Categoria[0]
  },{
    marca :"Bmt",
    modelo : "Biv20",
    precio : 32.00,
    ficha : "Material de Cobre",
    imagen : "../../assets/BIG20.jpg",
    //cat: Categoria[1]
  }];

  constructor() {

  }



  ngOnInit(): void {
  }


}
