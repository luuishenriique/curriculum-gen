import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  constructor(private pessoaService: PessoaService, ) { }

  pessoa = {
    id: 0,
    nome: '',
    dtNasc: new Date('01/01/1990'),
    email: '',
    ddd: '',
    celular: '',
    telefone: '',
    endereco: {
      id: 0,
      cep: '',
      uf: '',
      cidade: '',
      bairro: '',
      rua: '',
      numero: ''
    },
    redeSocial:{
      id: 0,
      nome: '',
      link: ''
    },
    historicoProfissional:{
      id: 0,
      empresa: '',
      cargo: '',
      dtInicio: '',
      dtFim: '',
      referencia:{
        id: 0,
        nome: '',
        email: '',
        ddd: '',
        telefone: ''
      }
    },
    educacao: {
      id: 0,
      instituicao: '',
      curso: '',
      dtInicio: new Date('01/01/1990'),
      dtFim: new Date('01/01/1990'),
      tipo: {
        id: 0,
        descricao: ''
      }
    },
    habilidade: {
      id: 0,
      descricao: '',
      nivelHabilidade:{
        id: 0,
        nivel: ''
      }
    }
  }

  public curriculumForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dtNasc: new FormControl(),
    email: new FormControl(),
    ddd: new FormControl(),
    celular: new FormControl(),
    telefone: new FormControl(),
    endereco: new FormGroup({
      cep: new FormControl(),
      uf: new FormControl(),
      cidade: new FormControl(),
      bairro: new FormControl(),
      rua: new FormControl(),
      numero: new FormControl()
    }),
    redeSocial: new FormGroup({
      nome: new FormControl(),
      link: new FormControl()
    }),
    historicoProfissional: new FormGroup({
      empresa: new FormControl(),
      cargo: new FormControl(),
      dtInicio: new FormControl(),
      dtFim: new FormControl(),

      referencia: new FormGroup({
        nome: new FormControl(),
        email: new FormControl(),
        telefone: new FormControl()
      })
    }),
    educacao: new FormGroup({
      instituicao: new FormControl(),
      curso: new FormControl(),
      dtInicio: new FormControl(),
      dtFim: new FormControl(),
      tipo: new FormGroup({
        nivel: new FormControl()
      })
    }),
    habilidade: new FormGroup({
      descricao: new FormControl(),
      nivelHabilidade: new FormGroup({
        nivel: new FormControl()
      })
    })
  });

  ngOnInit(): void {
    console.log(this.curriculumForm.getRawValue());
  }

  teste(teste: any): void{
    console.log(teste);
  }
}
