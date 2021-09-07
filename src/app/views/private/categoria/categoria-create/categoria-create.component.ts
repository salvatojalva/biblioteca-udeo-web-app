import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriasService } from 'src/app/core/core/models/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.scss']
})
export class CategoriaCreateComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private categoriaService: CategoriasService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  save(item:any){
    this.sub = this.categoriaService.store(item)
      .subscribe(
        ()=> this.router.navigate([`/private/categorias`]),
        (err) => console.log(err)
      )
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }


}
