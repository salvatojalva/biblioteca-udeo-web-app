import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditorialService } from 'src/app/core/core/models/editorial.service';

@Component({
  selector: 'app-editorial-edit',
  templateUrl: './editorial-edit.component.html',
  styleUrls: ['./editorial-edit.component.scss']
})
export class EditorialEditComponent implements OnInit {

  item!: any;
  Id!: number;
  dataLoaded: boolean = false;

  sub!: Subscription;
  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private editorialService: EditorialService,
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
        this.subItem = this.editorialService.show(this.Id)
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
    this.sub = this.editorialService.update(this.Id,itemEdit)
      .subscribe(
        ()=> this.router.navigate([`/private/editoriales`]),
        (err) => console.log(err)
      )
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }


}
