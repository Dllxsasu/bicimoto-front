import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {
  titulo:string="MARCAS AFILIADAS";
  constructor() { }

  ngOnInit(): void {
  }

}
