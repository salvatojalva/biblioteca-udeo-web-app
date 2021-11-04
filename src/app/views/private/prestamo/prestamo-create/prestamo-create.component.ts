import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Observable, of, OperatorFunction, Subscription } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DocumentoItemService } from 'src/app/core/core/models/documento-item.service';
import { DocumentoService } from 'src/app/core/core/models/documento.service';
import { PrestamoService } from 'src/app/core/core/models/prestamo.service';
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

  existFisico: boolean = false;
  existDigital: boolean = false;
  digitalSelected: boolean = false;

  prestarDisallow: boolean = false;

  searchs: any = {
    Usuario: null,
    Documento: null,
    QuiereFisico: null
  };

  user: any;

  userRol: string = 'student';

  constructor(
    private uService: UsuarioService,
    private dService: DocumentoService,
    private itemService: DocumentoItemService,
    private formBuilder: FormBuilder,
    private prestamoService: PrestamoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getUserRol();
  }

  getUserRol(){
    this.user = localStorage.getItem("udeo_user");

    this.user = JSON.parse(this.user);

    this.userRol = this.user.Rol;

    if(this.userRol != 'admin')
    {
      this.searchs.Usuario = this.user;
    }


    console.log("this is the rol: " + this.userRol);
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
    this.prestarDisallow = false;
    this.existFisico = false;
    this.existDigital = false;

    if (e.item.Id != null) {
      this.subItem = this.itemService.itemsByDocument(e.item.Id)
        .subscribe(
          (res: any) => {
            console.log(res)

            res.resul.forEach((item:any) => {
              if(item.EsFisico) this.existFisico = true;
              if(!item.EsFisico) this.existDigital = true;
            });

            if(!this.existDigital && !this.existFisico){
              this.prestarDisallow = true;
            }


          },
          (err: any) => {
            console.log(err);
          }
        );
      this.subArray.push(this.subItem);
    }

  }


  handleData() {

    if(this.userRol == "admin"){

      let data = {
        UsuarioId: this.itemForm.value.Usuario.Id,
        DocumentoId: this.itemForm.value.Documento.Id,
        EsDigital: (this.searchs.QuiereFisico == "1") ? true: false
      };

      this.sub = this.prestamoService.store(data)
      .subscribe(
        ()=> this.router.navigate([`/private/prestamos`]),
        (err) => console.log(err)
      )
    }else{
      let data = {
        UsuarioId: this.itemForm.value.Usuario.Id,
        DocumentoId: this.itemForm.value.Documento.Id,
        EsDigital: (this.searchs.QuiereFisico == "1") ? true: false
      };

      this.sub = this.prestamoService.solicitar(data)
      .subscribe(
        ()=> this.router.navigate([`/private`]),
        (err) => console.log(err)
      )
    }

  }

  formatter = (result: any) => result.GoogleId != null ? result.GoogleId : '';
  formatterLibro = (result: any) => result.Titulo != null ? result.Titulo : '';

}
