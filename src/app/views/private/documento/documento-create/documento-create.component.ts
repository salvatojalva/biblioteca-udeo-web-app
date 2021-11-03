import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Observable, of, OperatorFunction, Subscription } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { AnioService } from 'src/app/core/core/models/anio.service';
import { AutorService } from 'src/app/core/core/models/autor.service';
import { CarreraService } from 'src/app/core/core/models/carrera.service';
import { CategoriasService } from 'src/app/core/core/models/categoria.service';
import { DivisionesService } from 'src/app/core/core/models/divisiones.service';
import { DocumentoService } from 'src/app/core/core/models/documento.service';
import { EditorialService } from 'src/app/core/core/models/editorial.service';
import { SedeService } from 'src/app/core/core/models/sede.service';
import { TagService } from 'src/app/core/core/models/tag.service';
import { TipoDocumentoService } from 'src/app/core/core/models/tipo-documento.service';
import { FomrModalComponent } from 'src/app/shared/forms/fomr-modal/fomr-modal.component';


@Component({
  selector: 'app-documento-create',
  templateUrl: './documento-create.component.html',
  styleUrls: ['./documento-create.component.scss']
})
export class DocumentoCreateComponent implements OnInit, OnDestroy {

  itemForm!: any;
  portadaFile: File | null = null;
  documentoFile: File | null = null;

  searchs: any = {
    Categoria: null,
    Autor: null,
    Anio: null,
    Division: null,
    Editorial: null,
    Carrera: null,
    Sede: null,
    Tag: null
  };
  searching = false;
  searchFailed = false;
  autoresList: any = [];
  tagsList: any = [];
  documento: any = {};

  sub!: Subscription;
  subItem!: Subscription;
  subArray: Subscription[] = [];


  constructor(
    configModal: NgbModalConfig,
    private formBuilder: FormBuilder,
    private categoriaService: CategoriasService,
    private divisionService: DivisionesService,
    private anioService: AnioService,
    private autorService: AutorService,
    private editorialService: EditorialService,
    private carreraService: CarreraService,
    private sedeService: SedeService,
    private tagService: TagService,
    private tipoDocumentoService: TipoDocumentoService,
    private documentoService: DocumentoService,
    private modalService: NgbModal,
    private router: Router
  ) {
    configModal.backdrop = 'static';
    configModal.keyboard = false;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.itemForm = this.formBuilder.group({
      titulo: ['', RxwebValidators.required()],
      codigo: ['', RxwebValidators.required()],
      tipo_documento_name: ['', RxwebValidators.required()],
      cantidad: [0, RxwebValidators.required()],
      categoria_name: ['', RxwebValidators.required()],
      anio_name: ['', RxwebValidators.required()],
      autor_name: [''],
      tag_name: [''],
      carrera_name: ['', RxwebValidators.required()],
      division_name: ['', RxwebValidators.required()],
      editorial_name: [''],
      sede_name: ['', RxwebValidators.required()],
      portada_file: [null, [
        RxwebValidators.extension({ extensions: ["jpeg", "png", "jpg", "gif"] })
      ]
      ],
      documento_file: [null, [
        RxwebValidators.extension({ extensions: [".pdf"] })
      ],

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

  removeTag(index: number) {
    this.tagsList.splice(index, 1);
  }

  removeAutor(index: number) {
    this.autoresList.splice(index, 1);
  }

  handleDataDocumento() {

    if(
      this.itemForm.value.anio_name != null &&
      this.itemForm.value.categoria_name != null &&
      this.itemForm.value.division_name != null &&
      this.itemForm.value.tipo_documento_name != null &&
      this.itemForm.value.carrera_name != null &&
      this.itemForm.value.sede_name != null &&
      this.itemForm.value.editorial_name != null &&
      this.autoresList.length > 0 &&
      this.tagsList.length > 0
    )
    {
      this.documento = {
        Documento: {
          Codigo: this.itemForm.value.codigo,
          Titulo: this.itemForm.value.titulo,
          Portada: this.portadaFile,
          Documento: this.documentoFile,
          CantidadEjemplares: this.itemForm.value.cantidad
        },
        BelongsTo: {
          Anio: this.itemForm.value.anio_name.Id,
          Categoria: this.itemForm.value.categoria_name.Id,
          Division: this.itemForm.value.division_name.Id,
          TipoDocumento: this.itemForm.value.tipo_documento_name.Id,
          Carrera: this.itemForm.value.carrera_name.Id,
          Sede: this.itemForm.value.sede_name.Id,
          Editorial: (this.itemForm.value.editorial_name != '') ? this.itemForm.value.editorial_name.Id: null,
        },
  
        Tags: this.tagsList,
        Autores: this.autoresList
      }
  
      this.sub = this.documentoService.addDocument(this.documento)
        .subscribe(
          () => this.router.navigate([`/private/documentos`]),
          (err) => console.log(err)
        )
      this.subArray.push(this.sub);
    }

    
  }

  open(type: string) {
    const modalRef = this.modalService.open(FomrModalComponent);
    modalRef.componentInstance.Type = type;
    modalRef.result.then((result: any) => {
      if (result) {
        this.searchs[type] = result;
        if (type == 'Autor') this.autoresList.push(result);
        if (type == 'Tag') this.tagsList.push(result);
      }
    },
    () => {
      this.searchs[type] = null;
    });
  }

  autorSelected(e: any) {
    this.autoresList.push(e.item);
    setTimeout(() => this.searchs.Autor = null, 300)
  }

  tagSelected(e: any) {
    this.tagsList.push(e.item);
    setTimeout(() => this.searchs.Tag = null, 300)
  }

  searchCategoria: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.categoriaService.search(term).pipe(
          catchError(() => {
            return of([]);
          }))
      ),
    )

  searchTipoDocumento: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.tipoDocumentoService.search(term).pipe(
          catchError(() => {
            return of([]);
          }))
      ),
    )


  searchDivision: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.divisionService.search(term).pipe(
          catchError(() => {
            return of([]);
          }),
        )
      ),
    )

  searchAnio: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.anioService.search(term).pipe(
          catchError(() => {
            return of([]);
          }),
        )
      ),
    )

  searchAutor: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.autorService.search(term).pipe(
          catchError(() => {
            return of([]);
          }),
        )
      ),
    )

  searchCarrera: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.carreraService.search(term).pipe(
          catchError(() => {
            return of([]);
          }),
        )
      ),
    )

  searchEditorial: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.editorialService.search(term).pipe(
          catchError(() => {
            return of([]);
          }),
        )
      ),
    )

  searchSede: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.sedeService.search(term).pipe(
          catchError(() => {
            return of([]);
          }),
        )
      ),
    )

  searchTag: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.tagService.search(term).pipe(
          catchError(() => {
            return of([]);
          }),
        )
      ),
    )

  formatter = (result: any) => result.Nombre != null ? result.Nombre : '';
  formatterTipo = (result: any) => result.Tipo != null ? result.Tipo : '';


  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if (sub) sub.unsubscribe()
    })
  }
}