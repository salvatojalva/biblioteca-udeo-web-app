import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutorService } from 'src/app/core/core/models/autor.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.scss']
})
export class AutorListComponent implements OnInit {

  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private autorService: AutorService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.subItem = this.autorService.getAll()
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
