import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarreraService } from 'src/app/core/core/models/carrera.service';

@Component({
  selector: 'app-carrera-list',
  templateUrl: './carrera-list.component.html',
  styleUrls: ['./carrera-list.component.scss']
})
export class CarreraListComponent implements OnInit, OnDestroy {

  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private carreraService: CarreraService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.subItem = this.carreraService.getAll()
      .subscribe(
        (res:any) => {
          this.items = res;
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

}
