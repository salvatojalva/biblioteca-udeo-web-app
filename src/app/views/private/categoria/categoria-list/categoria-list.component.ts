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

  title: string = '';
  page: number = 1;
  limit: number = 6;

  pageItemsCount!: number;

  pageSizes = [6, 15, 25];

  constructor(
    private categoriaService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.subItem = this.categoriaService.seachByName(
      this.title,
      this.page,
      this.limit
    )
      .subscribe(
        (res:any) => {
          this.items = res.records;
          this.pageItemsCount = res.totalCount;
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

  handlePageChange(event: any): void {
    this.page = event;
    this.list();
  }

  handlePageSizeChange(event: any): void {
    this.limit = event.target.value;
    this.page = 1;
    this.list();
  }


  searchTitle(): void {
    this.page = 1;
    this.list();
  }
}
