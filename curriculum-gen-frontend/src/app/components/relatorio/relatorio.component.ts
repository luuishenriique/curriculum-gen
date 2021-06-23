import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  tipoList: any = [
    { id: 1, descricao: 'curso' },
    { id: 2, descricao: 'certificação' },
    { id: 3, descricao: 'profissionalizante' },
    { id: 4, descricao: 'técnico' },
    { id: 5, descricao: 'graduação' },
    { id: 6, descricao: 'pós-graduação' },
    { id: 7, descricao: 'mestrado' }
  ]

  nivelHabilidadeList: any = [
    { id: 1, nivel: 'iniciante' },
    { id: 2, nivel: 'intermediário' },
    { id: 3, nivel: 'avançado' },
  ]

  constructor(
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder,
    ) { }

  pessoa = {
    id: 1,
    nome: 'Henrique Martins',
    dtNasc: new Date('07/09/1989'),
    email: 'henrique_rr_martins@hotmail.com',
    ddd: '81',
    celular: 'x xxxx-xxxx',
    telefone: 'xxxx-xxxx',
    endereco: {
      id: 1,
      cep: '54783-010',
      uf: 'PE',
      cidade: 'Recife',
      bairro: 'Aldeia dos Camarás',
      rua: 'Est. Aldeia',
      numero: '11971'
    },
    redeSocial: {
      id: 1,
      nome: 'Linkedin',
      link: 'https://www.linkedin.com/in/henrique-martins-450643119/'
    },
    historicoProfissional: {
      id: 1,
      empresa: 'Tascom',
      cargo: 'Desenvolvedor',
      dtInicio: new Date('11/23/2020'),
      dtFim: new Date('05/17/2021'),
      referencia: {
        id: 1,
        nome: 'Felipe',
        email: 'f@tascom.com.br',
        ddd: '81',
        celular: 'x xxxx-xxxx'
      }
    },
    educacao: {
      id: 1,
      instituicao: 'UNIS-MG',
      curso: 'Analise e desenvolvimento de sistemas',
      dtInicio: new Date('02/02/2015'),
      dtFim: new Date('08/10/2018'),
      tipo: {
        id: 5,
        descricao: 'Graduação'
      }
    },
    habilidade: {
      id: 1,
      descricao: 'JavaScript',
      nivelHabilidade: {
        id: 2,
        nivel: 'Intermediário'
      }
    }
  }

  public curriculumForm: FormGroup = this.formBuilder.group({
    nome: this.pessoa.nome,
    dtNasc: this.pessoa.dtNasc,
    email: this.pessoa.email,
    ddd: this.pessoa.ddd,
    celular: this.pessoa.celular,
    telefone: this.pessoa.telefone,
    endereco: this.formBuilder.group({
      cep: this.pessoa.endereco.cep,
      uf: this.pessoa.endereco.uf,
      cidade: this.pessoa.endereco.cidade,
      bairro: this.pessoa.endereco.bairro,
      rua: this.pessoa.endereco.rua,
      numero: this.pessoa.endereco.numero
    }),
    redeSocial: this.formBuilder.group({
      nome: this.pessoa.redeSocial.nome,
      link: this.pessoa.redeSocial.link
    }),
    historicoProfissional: this.formBuilder.group({
      empresa: this.pessoa.historicoProfissional.empresa,
      cargo: this.pessoa.historicoProfissional.cargo,
      dtInicio: this.pessoa.historicoProfissional.dtInicio,
      dtFim: this.pessoa.historicoProfissional.dtFim,

      referencia: this.formBuilder.group({
        nome: this.pessoa.historicoProfissional.referencia.nome,
        email: this.pessoa.historicoProfissional.referencia.email,
        celular: this.pessoa.historicoProfissional.referencia.celular
      })
    }),
    educacao: this.formBuilder.group({
      instituicao: this.pessoa.educacao.instituicao,
      curso: this.pessoa.educacao.curso,
      dtInicio: this.pessoa.educacao.dtInicio,
      dtFim: this.pessoa.educacao.dtFim,
      tipo: this.formBuilder.group({
        id: this.pessoa.educacao.tipo.id,
        descricao: this.pessoa.educacao.tipo.descricao
      })
    }),
    habilidade: this.formBuilder.group({
      descricao: new FormControl(),
      nivelHabilidade: this.formBuilder.group({
        id: this.pessoa.habilidade.nivelHabilidade.id,
        nivel: this.pessoa.habilidade.nivelHabilidade.nivel
      })
    })
  });

  ngOnInit(): void {
    console.log(this.curriculumForm.getRawValue());
  }

  teste(teste: any): void {
    console.log(teste);
  }
}
