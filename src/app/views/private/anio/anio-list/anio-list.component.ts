import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnioService } from 'src/app/core/core/models/anio.service';

@Component({
  selector: 'app-anio-list',
  templateUrl: './anio-list.component.html',
  styleUrls: ['./anio-list.component.scss']
})
export class AnioListComponent implements OnInit, OnDestroy {

  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private anioService: AnioService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.subItem = this.anioService.getAll()
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
