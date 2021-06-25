import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
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
    celular: '',
    telefone: '',
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
        celular: ''
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
    nome: new FormControl(),
    dtNasc: new FormControl(),
    email: new FormControl(),
    ddd: new FormControl(),
    celular: new FormControl(),
    telefone: new FormControl(),
    endereco: this.formBuilder.group({
      cep: new FormControl(),
      uf: new FormControl(),
      cidade: new FormControl(),
      bairro: new FormControl(),
      rua: new FormControl(),
      numero: new FormControl(),
    }),
    redeSocial: this.formBuilder.group({
      nome: new FormControl(),
      link: new FormControl(),
    }),
    historicoProfissional: this.formBuilder.group({
      empresa: new FormControl(),
      cargo: new FormControl(),
      dtInicio: new FormControl(),
      dtFim: new FormControl(),

      referencia: this.formBuilder.group({
        nome: new FormControl(),
        email: new FormControl(),
        celular: new FormControl(),
      })
    }),
    educacao: this.formBuilder.group({
      instituicao: new FormControl(),
      curso: new FormControl(),
      dtInicio: new FormControl(),
      dtFim: new FormControl(),
      tipo: this.formBuilder.group({
        id: new FormControl(),
        descricao: new FormControl(),
      })
    }),
    habilidade: this.formBuilder.group({
      descricao: new FormControl(),
      nivelHabilidade: this.formBuilder.group({
        id: new FormControl(),
        nivel: new FormControl(),
      })
    })
  });

  ngOnInit(): void {
    this.startFormValues();
    console.log(this.curriculumForm.getRawValue());
  }

  teste(teste: any): void {
    console.log(teste);
  }

  private startFormValues(): void{
    this.curriculumForm.patchValue(this.pessoa);
  }

  public selectTipo(event: any){
    console.log(event)
    const id = event.value;
    for(let tipo of this.tipoList){
      if(tipo.id == id)
        this.curriculumForm.get('educacao')?.get('tipo')?.patchValue(tipo);
    }
  }

  public selectNivelHabilidade(event: any){
    console.log(event)
    const id = event.value;
    for(let nivelHabilidade of this.nivelHabilidadeList){
      if(nivelHabilidade.id == id){
        this.curriculumForm.get('habilidade')?.get('nivelHabilidade')?.patchValue(nivelHabilidade);
      }
    }
  }
}
