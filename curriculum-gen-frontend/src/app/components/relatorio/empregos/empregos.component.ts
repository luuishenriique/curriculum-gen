import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empregos',
  templateUrl: './empregos.component.html',
  styleUrls: ['./empregos.component.scss']
})
export class EmpregosComponent implements OnInit {

  @Input() curriculumForm: FormGroup;
  @Input() listaEmprego: Array<any>;

  constructor(private formBuilder: FormBuilder) {
    this.curriculumForm = formBuilder.group({});
    this.listaEmprego = new Array<any>();
  }

  ngOnInit(): void {
    this.setEmprego();
    this.empregos.patchValue(this.listaEmprego);
  }

  get empregos(): FormArray { 
    return this.curriculumForm.controls['empregos'] as FormArray;
  }

  private setEmprego(){
    const qtd = this.listaEmprego.length;

    for(let i = 0; i < qtd; i++){
      this.addEmprego();
    }
  }

  newEmprego(): FormGroup {
    return this.formBuilder.group({
      empresa: new FormControl(),
      cargo: new FormControl(),
      dtInicio: new FormControl(),
      dtFim: new FormControl(),

      referencia: this.formBuilder.group({
        nome: new FormControl(),
        email: new FormControl(),
        celular: new FormControl()
      })
    });
  }

  addEmprego() {
    this.empregos.push(this.newEmprego());
  }

  deleteEmprego(empregoIndex: number){
    this.empregos.removeAt(empregoIndex);
  }
}
