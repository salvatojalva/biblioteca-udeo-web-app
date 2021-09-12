import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SedeService } from 'src/app/core/core/models/sede.service';

@Component({
  selector: 'app-sede-edit',
  templateUrl: './sede-edit.component.html',
  styleUrls: ['./sede-edit.component.scss']
})
export class SedeEditComponent implements OnInit, OnDestroy {

  item!: any;
  Id!: number;
  dataLoaded: boolean = false;

  sub!: Subscription;
  subItem!: Subscription;
  subArray: Subscription[] = [];


  constructor(
    private sedeService: SedeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getItemData();
  }

  getItemData(){
    this.sub = this.route.params.subscribe(
      params => {
        this.Id = params['id'];
        this.subItem = this.sedeService.show(this.Id)
        .subscribe(
          (res: any) => {

            this.item = res;
            this.dataLoaded = true;
          },
          err => {
            console.log(err);
          }
        );
        this.subArray.push(this.subItem);
      },
      () => this.dataLoaded = true
    );
    this.subArray.push(this.sub);
  }

  save(itemEdit:any){
    this.sub = this.sedeService.update(this.Id,itemEdit)
      .subscribe(
        ()=> this.router.navigate([`/private/sedes`]),
        (err) => console.log(err)
      )
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }

}
