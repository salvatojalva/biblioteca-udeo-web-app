import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Observable, of, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { AnioService } from 'src/app/core/core/models/anio.service';
import { AutorService } from 'src/app/core/core/models/autor.service';
import { CarreraService } from 'src/app/core/core/models/carrera.service';
import { CategoriasService } from 'src/app/core/core/models/categoria.service';
import { DivisionesService } from 'src/app/core/core/models/divisiones.service';
import { EditorialService } from 'src/app/core/core/models/editorial.service';
import { SedeService } from 'src/app/core/core/models/sede.service';
import { TagService } from 'src/app/core/core/models/tag.service';
import { FomrModalComponent } from 'src/app/shared/forms/fomr-modal/fomr-modal.component';


@Component({
  selector: 'app-documento-create',
  templateUrl: './documento-create.component.html',
  styleUrls: ['./documento-create.component.scss']
})
export class DocumentoCreateComponent implements OnInit {

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
    private modalService: NgbModal
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
      cantidad: [0, RxwebValidators.required()],
      categoria_name: ['', RxwebValidators.required()],
      anio_name: ['', RxwebValidators.required()],
      autor_name: ['', RxwebValidators.required()],
      tag_name: ['', RxwebValidators.required()],
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

  handleData() {

  }

  open(type:string) {
    const modalRef = this.modalService.open(FomrModalComponent);
    modalRef.componentInstance.Type = type;

    modalRef.result.then((result:any) => {
      console.log(result);
      if (result) {
        this.searchs[type] = result;
        if(type == 'Autor') this.autoresList.push(result);
        if(type == 'Tag') this.tagsList.push(result);
      }
    },
    () => {
      this.searchs[type] = null;
    });
  }

  autorSelected(e: any) {
    this.autoresList.push(e.item);
  }

  tagSelected(e: any) {
    this.tagsList.push(e.item);
  }

  searchCategoria: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => { this.searching = true; }),
      switchMap(term =>
        this.categoriaService.search(term).pipe(
          map((response: any) => {
            return response.length > 0 ? response : [];
          }),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  searchDivision: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.divisionService.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }),
        )
      ),
      tap(() => this.searching = false)
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
      tap(() => this.searching = false)
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

}