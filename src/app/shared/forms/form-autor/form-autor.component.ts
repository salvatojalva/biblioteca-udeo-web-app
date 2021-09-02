import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-form-autor',
  templateUrl: './form-autor.component.html',
  styleUrls: ['./form-autor.component.scss']
})
export class FormAutorComponent implements OnInit {

  @Input() item: any = {};
  @Output() callBack = new EventEmitter<any>();

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
          "Nombre": [this.item.Nombre, RxwebValidators.required()],
          "FechaNacimiento": [ '', RxwebValidators.required()]
        });

        this.itemForm.controls.FechaNacimiento.setValue(
          formatDate(this.item.FechaNacimiento,'yyyy-MM-dd','en')
        );

      }else{
        this.itemForm = this.formBuilder.group({
          "Nombre": ['', RxwebValidators.required()],
          "FechaNacimiento": ['', RxwebValidators.required() ]
        });
      }
    }
  
    handleData() {
      this.callBack.emit(this.itemForm.value);
    }
  

}
