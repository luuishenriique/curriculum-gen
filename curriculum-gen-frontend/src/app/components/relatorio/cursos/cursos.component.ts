import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.curriculumForm = this.formBuilder.group({});
  }

  get cursos(): FormArray {
    return this.curriculumForm.controls['cursos'] as FormArray;
  }

  ngOnInit(): void {}

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
}
