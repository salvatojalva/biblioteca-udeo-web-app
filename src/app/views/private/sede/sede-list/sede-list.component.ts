import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SedeService } from 'src/app/core/core/models/sede.service';

@Component({
  selector: 'app-sede-list',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.scss']
})
export class SedeListComponent implements OnInit, OnDestroy {

  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  title: string = '';
  page: number = 1;
  limit: number = 6;

  pageItemsCount!: number;

  pageSizes = [6, 15, 25];

  constructor(
    private sedeService: SedeService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.subItem = this.sedeService.seachByName(
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

  ngOnDestroy(): void {
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
