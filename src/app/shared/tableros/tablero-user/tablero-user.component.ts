import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PrestamoService } from 'src/app/core/core/models/prestamo.service';

@Component({
  selector: 'app-tablero-user',
  templateUrl: './tablero-user.component.html',
  styleUrls: ['./tablero-user.component.scss']
})
export class TableroUserComponent implements OnInit {


  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  title: string = '';
  page: number = 1;
  limit: number = 6;
  defaultType: string = 'PorAprobar';

  pageItemsCount!: number;

  pageSizes = [6, 15, 25];

  user: any;


  constructor(
    private prestaService : PrestamoService
  ) { }

  ngOnInit(): void {

    

    this.user = localStorage.getItem("udeo_user");

    this.user = JSON.parse(this.user);

    this.list();
  }

  list(){
    this.subItem = this.prestaService.misPrestamos(
      this.user.Id,
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

}
