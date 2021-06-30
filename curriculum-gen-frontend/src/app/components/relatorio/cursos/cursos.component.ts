import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Curso } from 'src/app/model/curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  tipoList: any = [
    { id: 0, descricao: 'curso' },
    { id: 1, descricao: 'certificação' },
    { id: 2, descricao: 'profissionalizante' },
    { id: 3, descricao: 'técnico' },
    { id: 4, descricao: 'graduação' },
    { id: 5, descricao: 'pós-graduação' },
    { id: 6, descricao: 'mestrado' }
  ];

  @Input() curriculumForm: FormGroup;
  @Input() listaCurso: Array<Curso> | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.curriculumForm = this.formBuilder.group({});
    this.listaCurso = new Array<any>();
  }

  get cursos(): FormArray {
    return this.curriculumForm.controls['cursos'] as FormArray;
  }

  ngOnInit(): void {
    this.setCurso();
    if(this.listaCurso){
      this.cursos.patchValue(this.listaCurso);
    }
  }

  private setCurso() {
    if(this.listaCurso){
      const qtd = this.listaCurso.length ? this.listaCurso.length : 0;

      for (let i = 0; i < qtd; i++) {
        this.addCurso();
      }
    }
  }

  newCurso(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(),
      instituicao: new FormControl(),
      cursos: new FormControl(),
      dtInicio: new FormControl(),
      dtFim: new FormControl(),
      tipo: this.formBuilder.group({
        id: new FormControl(),
        descricao: new FormControl()
      })
    })
  }

  addCurso(){
    this.cursos.push(this.newCurso());
  }

  deleteCurso(cursoInidex: number){
    this.cursos.removeAt(cursoInidex);
  }

  selectTipo(event: any, formGroupPosition: number){
    const id = event.value;

    for(let tipo of this.tipoList) {       
      if(tipo.id == id){
        this.cursos.at(formGroupPosition).get('tipo')?.patchValue(tipo);
      }
    }
  }
}
