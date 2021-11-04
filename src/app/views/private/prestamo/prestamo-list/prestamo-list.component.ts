import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PrestamoService } from 'src/app/core/core/models/prestamo.service';

@Component({
  selector: 'app-prestamo-list',
  templateUrl: './prestamo-list.component.html',
  styleUrls: ['./prestamo-list.component.scss']
})
export class PrestamoListComponent implements OnInit, OnDestroy {

  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  title: string = '';
  page: number = 1;
  limit: number = 6;
  defaultType: string = 'PorAprobar';

  pageItemsCount!: number;

  pageSizes = [6, 15, 25];
  constructor(
    private prestamoService: PrestamoService
  ) { }

  ngOnInit(): void {
    this.list();
  }


  aprobar(index: number)
  {
    this.subItem = this.prestamoService.aprobar(
      index
    )
      .subscribe(
        (res:any) => {
          this.listAprobados();
        },
        err => console.error(err)
      );

    this.subArray.push(this.subItem);
  }

  denegar(index: number)
  {
    this.subItem = this.prestamoService.denegar(
      index
    )
      .subscribe(
        (res:any) => {
          this.listAprobados();
        },
        err => console.error(err)
      );

    this.subArray.push(this.subItem);
  }


  listPorAprobar()
  {
    this.defaultType = 'PorAprobar';
    this.list();
  }

  listAprobados()
  {
    this.defaultType = 'PorAprobar';
    this.list();
  }

  list(){
    this.subItem = this.prestamoService.listPorAprobar(
      this.defaultType,
      this.page,
      this.limit
    )
      .subscribe(
        (res:any) => {
          this.items = res.resul;
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
