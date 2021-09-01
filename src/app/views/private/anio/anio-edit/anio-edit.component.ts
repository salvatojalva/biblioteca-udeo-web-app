import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnioService } from 'src/app/core/core/models/anio.service';

@Component({
  selector: 'app-anio-edit',
  templateUrl: './anio-edit.component.html',
  styleUrls: ['./anio-edit.component.scss']
})
export class AnioEditComponent implements OnInit, OnDestroy {

  item!: any;
  Id!: number;
  dataLoaded: boolean = false;
  
  sub!: Subscription;
  subItem!: Subscription;
  subArray: Subscription[] = [];


  constructor(
    private anioService: AnioService,
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
        this.subItem = this.anioService.show(this.Id)
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
    this.sub = this.anioService.update(this.Id,itemEdit)
      .subscribe(
        ()=> this.router.navigate([`/private/anios`]),
        (err) => console.log(err)
      )
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }



}
