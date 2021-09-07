import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoriasService } from 'src/app/core/core/models/categoria.service';



@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit, OnDestroy {

  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private categoriaService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.subItem = this.categoriaService.getAll()
      .subscribe(
        (res:any) => {
          this.items = res;
        },
        err => console.error(err)
      );
    this.subArray.push(this.subItem);
  }

  ngOnDestroy(): void{
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }

}
