import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

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
    redesSociais: [
      {
        id: 1,
        nome: 'Linkedin',
        link: 'https://www.linkedin.com/in/henrique-martins-450643119/'
      }
    ],
    empregos: [
      {
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
      }
    ],
    cursos: [
      {
        id: 1,
        instituicao: 'UNIS-MG',
        curso: 'Analise e desenvolvimento de sistemas',
        dtInicio: new Date('02/02/2015'),
        dtFim: new Date('08/10/2018'),
        tipo: {
          id: 4,
          descricao: 'Graduação'
        }
      }
    ],
    habilidades: [
      {
        id: 1,
        descricao: 'JavaScript',
        nivelHabilidade: {
          id: 1,
          nivel: 'Intermediário'
        }
      },
      {
        id: 2,
        descricao: 'Java',
        nivelHabilidade: {
          id: 1,
          nivel: 'Intermediário'
        }
      },
      {
        id: 3,
        descricao: 'Angular',
        nivelHabilidade: {
          id: 1,
          nivel: 'Intermediário'
        }
      }
    ]
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
    redesSociais: this.formBuilder.array([]),
    empregos: this.formBuilder.array([]),
    cursos: this.formBuilder.array([]),
    habilidades: this.formBuilder.array([])
  });

  //Criar Gets dos FormArrays
  get habilidades(): FormArray {
    return this.curriculumForm.get('habilidades') as FormArray;
  }

  get cursos(): FormArray {
    return this.curriculumForm.get('cursos') as FormArray;
  }

  get redesSociais(): FormArray {
    return this.curriculumForm.get('redesSociais') as FormArray;
  }

  //Starta valores iniciais do form baseado no objeto recebido do service
  ngOnInit(): void {
    this.startFormValues();

    //Sempre que o valor do form mudar printa o form
    this.curriculumForm.valueChanges.subscribe(form => console.log(form));
  }

  //Prepara os componentes e recebe valores do objeto
  private startFormValues(): void {
    this.setHabilidade();
    this.setRedeSocial();
    this.curriculumForm.patchValue(this.pessoa);
  }

  //Método de submit do relatório
  onSubmit(teste: any): void {}

  private setHabilidade() {
    const qtd = this.pessoa.habilidades.length;

    for (let i = 0; i < qtd; i++) {
      this.addHabilidade();
    }
  }

  private setRedeSocial(){
    const qtd = this.pessoa.redesSociais.length;

    for(let i = 0; i < qtd; i++){
      this.addRedeSocial();
    }
  }

  //Cria FormGroups no FormArrays
  newHabilidade(): FormGroup {
    return this.formBuilder.group({
      descricao: new FormControl(),
      nivelHabilidade: this.formBuilder.group({
        id: new FormControl(),
        nivel: new FormControl()
      })
    });
  }

  newRedeSocial(): FormGroup{
    return this.formBuilder.group({
      nome: new FormControl(),
      link: new FormControl(),
    });
  }

  addHabilidade() {
    this.habilidades.push(this.newHabilidade());
  }

  addRedeSocial(){
    this.redesSociais.push(this.newRedeSocial());
  }

  deleteRedeSocial(redeSocialIndex: number){
    this.redesSociais.removeAt(redeSocialIndex);
  }
}