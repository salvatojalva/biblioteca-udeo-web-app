import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-form-tipo',
  templateUrl: './form-tipo.component.html',
  styleUrls: ['./form-tipo.component.scss']
})
export class FormTipoComponent implements OnInit {

  @Input() item: any ={};
  @Output() callBack = new EventEmitter<any>(); //Hijo al padre

  itemForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    if(this.item){
      this.itemForm = this.formBuilder.group({
        "Tipo": [this.item.Tipo, RxwebValidators.required()]
      });
    }else{
      this.itemForm = this.formBuilder.group({
        "Tipo": ['', RxwebValidators.required()]
      });
    }
  }

  handleData() {
    this.callBack.emit(this.itemForm.value);
  }

}
