import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Observable, of, OperatorFunction, Subscription } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DocumentoService } from 'src/app/core/core/models/documento.service';
import { UsuarioService } from 'src/app/core/core/models/usuario.service';

@Component({
  selector: 'app-prestamo-create',
  templateUrl: './prestamo-create.component.html',
  styleUrls: ['./prestamo-create.component.scss']
})
export class PrestamoCreateComponent implements OnInit, OnDestroy {

  itemForm!: any;
  
  sub!: Subscription;
  subItem!: Subscription;
  subArray: Subscription[] = [];

  searchs: any = {
    Usuario: null,
    Documento: null
  };

  constructor(
    private uService: UsuarioService,
    private dService: DocumentoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.itemForm = this.formBuilder.group({
      Usuario: ['', RxwebValidators.required()],
      Documento: ['', RxwebValidators.required()],
      quiere_fisico: false
    });
  }


  searchUsuario: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.uService.search(term).pipe(
          catchError(() => {
            return of([]);
          }))
      ),
    )

  searchDocumento: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.dService.searchOP(term).pipe(
          catchError(() => {
            return of([]);
          }))
      ),
    )


  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if (sub) sub.unsubscribe()
    })
  }

  documentoSelected(e: any) {
    console.log("buscar "  + e.item);
  }
  

  handleData(){
    console.log("save prestamo")
  }

  formatter = (result: any) => result.GoogleId != null ? result.GoogleId : '';
  formatterLibro = (result: any) => result.Titulo != null ? result.Titulo : '';

}
