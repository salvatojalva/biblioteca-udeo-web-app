import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-form-anio',
  templateUrl: './form-anio.component.html',
  styleUrls: ['./form-anio.component.scss']
})
export class FormAnioComponent implements OnInit {

  @Input() item: any = {}; // Padre al hijo
  @Output() callBack = new EventEmitter<any>(); //Hijo al padre
  //La propiedad de tipo "EventEmitter", necesaria para emitir el evento personalizado,
  // debe ser decorada con @Output. Esto le dice al framework que va a
  //existir una vía de comunicación desde el hijo al padre.
  //nos sirve para decirle a TypeScript el tipo del dato que nuestro evento
  //personalizado escalará hacia el padre en su comunicación.

  itemForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
    //Validacion
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
