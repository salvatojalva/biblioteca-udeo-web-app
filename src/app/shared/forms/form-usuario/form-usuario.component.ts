import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  @Input() item: any = {};
  @Output() callBack = new EventEmitter<any>();

  Roles = ['admin', 'student']

  itemForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    if(this.item.Nombre != null){
      this.itemForm = this.formBuilder.group({
        "Nombre": [this.item.Nombre, RxwebValidators.required()],
        "GoogleId": [this.item.GoogleId, RxwebValidators.required()],
        "Apellido": [this.item.Apellido, RxwebValidators.required()],
        "Rol": [this.item.Rol, RxwebValidators.required()]
      });
    }else{
      this.itemForm = this.formBuilder.group({
        "Nombre": ['', RxwebValidators.required()],
        "GoogleId": ['', RxwebValidators.required()],
        "Apellido": ["created from app", RxwebValidators.required()],
        "Rol": ['', RxwebValidators.required()]
      });

    }
  }

  handleData() {
    this.callBack.emit(this.itemForm.value);
  }

}
