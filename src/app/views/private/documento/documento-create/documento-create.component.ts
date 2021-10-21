import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-documento-create',
  templateUrl: './documento-create.component.html',
  styleUrls: ['./documento-create.component.scss']
})
export class DocumentoCreateComponent implements OnInit {

  itemForm!: any;
  portadaFile: File | null = null;
  documentoFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.itemForm = this.formBuilder.group({
      titulo: ['', RxwebValidators.required()],
      codigo: ['', RxwebValidators.required()],
      cantidad: ['', RxwebValidators.required()],
      portada_file: [null, [
          RxwebValidators.extension({ extensions: ["jpeg", "png", "jpg", "gif"] })
        ]
      ],
      documento_file: [null, [
        RxwebValidators.extension({ extensions: [".pdf"] })
      ]
    ]
    });
  }

  handlePortadaFile(event: any) {
    const files = event.target.files;
    this.portadaFile = files.item(0);
  }

  handleDocumentoFile(event: any) {
    const files = event.target.files;
    this.documentoFile = files.item(0);
  }

  handleData() {

  }

}