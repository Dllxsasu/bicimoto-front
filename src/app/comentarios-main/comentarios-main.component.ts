import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios-main',
  templateUrl: './comentarios-main.component.html',
  styleUrls: ['./comentarios-main.component.scss']
})
export class ComentariosMainComponent implements OnInit {
  titulo:string = "COMENTARIOS";
  constructor() { }

  ngOnInit(): void {
  }

}
