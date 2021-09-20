import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-centrado-main',
  templateUrl: './titulo-centrado-main.component.html',
  styleUrls: ['./titulo-centrado-main.component.scss']
})
export class TituloCentradoMainComponent implements OnInit {
  @Input() titulo:string = "locura"; 
  constructor() { }

  ngOnInit(): void {
  }

}
