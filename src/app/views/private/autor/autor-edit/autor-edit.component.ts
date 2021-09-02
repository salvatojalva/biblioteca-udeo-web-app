import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutorService } from 'src/app/core/core/models/autor.service';

@Component({
  selector: 'app-autor-edit',
  templateUrl: './autor-edit.component.html',
  styleUrls: ['./autor-edit.component.scss']
})
export class AutorEditComponent implements OnInit, OnDestroy {

  item!: any;
  Id!: number;
  dataLoaded: boolean = false;
  
  sub!: Subscription;
  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private autorService: AutorService,
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

        this.subItem = this.autorService.show(this.Id)
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
    this.sub = this.autorService.update(this.Id,itemEdit)
      .subscribe(
        ()=> this.router.navigate([`/private/autores`]),
        (err) => console.log(err)
      )
    this.subArray.push(this.sub);
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }

  
}
