import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditorialService } from 'src/app/core/core/models/editorial.service';

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.scss']
})
export class EditorialListComponent implements OnInit, OnDestroy  {

  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private editorialService: EditorialService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.subItem = this.editorialService.getAll()
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
