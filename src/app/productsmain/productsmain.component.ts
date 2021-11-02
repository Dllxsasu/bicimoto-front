import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productsmain',
  templateUrl: './productsmain.component.html',
  styleUrls: ['./productsmain.component.scss']
})
export class ProductsmainComponent implements OnInit {

  @Input()  nombre:string="name";
  @Input() precio:string="price";
  @Input() marca:string="marxk"; 
  @Input() img:string="../../assets/prodct_img/aceite_quenda.png";
  constructor() { }

  ngOnInit(): void {
  }

}
