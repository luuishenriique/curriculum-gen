import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
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
          id: 5,
          descricao: 'Graduação'
        }
      }
    ],
    habilidades: [
      {
        id: 1,
        descricao: 'JavaScript',
        nivelHabilidade: {
          id: 2,
          nivel: 'Intermediário'
        }
      },
      {
        id: 2,
        descricao: 'Java',
        nivelHabilidade: {
          id: 2,
          nivel: 'Intermediário'
        }
      },
      {
        id: 3,
        descricao: 'Angular',
        nivelHabilidade: {
          id: 2,
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

  get empregos(): FormArray {
    return this.curriculumForm.get('empregos') as FormArray;
  }

  get redesSociais(): FormArray {
    return this.curriculumForm.get('redesSociais') as FormArray;
  }

  //Starta valores iniciais do form baseado no objeto recebido do service
  ngOnInit(): void {
    this.startFormValues();
  }

  //Método de submit do relatório
  onSubmit(teste: any): void {
    console.log(this.curriculumForm);
  }

  //Prepara os componentes e recebe valores do objeto
  private startFormValues(): void {
    this.setHabilidade();
    this.setCurso();
    this.setEmprego();
    this.setRedeSocial();
    this.curriculumForm.patchValue(this.pessoa);
  }

  private setHabilidade() {
    const qtd = this.pessoa.habilidades.length;

    for (let i = 0; i < qtd; i++) {
      this.addHabilidade();
    }
  }

  private setCurso() {
    const qtd = this.pessoa.cursos.length;

    for (let i = 0; i < qtd; i++) {
      this.addCurso();
    }
  }

  private setEmprego(){
    const qtd = this.pessoa.empregos.length;

    for(let i = 0; i < qtd; i++){
      this.addEmprego();
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

  newCurso(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(),
      instituicao: new FormControl(),
      curso: new FormControl(),
      dtInicio: new FormControl(),
      dtFim: new FormControl(),
      tipo: this.formBuilder.group({
        id: new FormControl(),
        descricao: new FormControl(),
      })
    });
  }

  newEmprego(): FormGroup{
    return this.formBuilder.group({
      empresa: new FormControl(),
      cargo: new FormControl(),
      dtInicio: new FormControl(),
      dtFim: new FormControl(),

      referencia: this.formBuilder.group({
        nome: new FormControl(),
        email: new FormControl(),
        celular: new FormControl(),
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

  addCurso() {
    this.cursos.push(this.newCurso());
  }

  addEmprego(){
    this.empregos.push(this.newEmprego());
  }

  addRedeSocial(){
    this.redesSociais.push(this.newRedeSocial());
  }

  //Delete FormGroups of FormArrays
  deleteHabilidade(habilidadeIndex: number) {
    this.habilidades.removeAt(habilidadeIndex);
  }

  deleteCurso(cursoIndex: number) {
    this.cursos.removeAt(cursoIndex);
  }

  deleteEmprego(empregoIndex: number){
    this.empregos.removeAt(empregoIndex);
  }

  deleteRedeSocial(redeSocialIndex: number){
    this.redesSociais.removeAt(redeSocialIndex);
  }
}
