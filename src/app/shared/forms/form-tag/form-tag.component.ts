import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-form-tag',
  templateUrl: './form-tag.component.html',
  styleUrls: ['./form-tag.component.scss']
})
export class FormTagComponent implements OnInit {

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
        "Nombre": [this.item.Nombre, RxwebValidators.required()]
      });
    }else{
      this.itemForm = this.formBuilder.group({
        "Nombre": ['', RxwebValidators.required()]
      });
    }
  }

  handleData() {
    this.callBack.emit(this.itemForm.value);
  }

}
