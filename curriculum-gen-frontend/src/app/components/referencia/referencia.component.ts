import { Component, OnInit } from '@angular/core';
import { Referencia } from '../../model/referencia.model'

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.scss']
})
export class ReferenciaComponent implements OnInit {

  listaReferencia: Referencia[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listaReferencia.push(
      {
        id: 1,
        nome: 'Henrique',
        dtNasc: new Date('09/07/2021'),
        email: 'henrique@hotmail.com',
        ddd: '81',
        celular: 'x 111111111',
        telefone: 'x xxxx-xxxx'
      }
    )
    this.listaReferencia.push(
      {
        id: 2,
        nome: 'Andre',
        dtNasc: new Date('10/07/2021'),
        email: 'andre@hotmail.com',
        ddd: '81',
        celular: 'x xxxx-xxxx',
        telefone: 'x 2222222222'
      }
    )
  }

}
