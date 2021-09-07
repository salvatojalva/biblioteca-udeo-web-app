import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriasService } from 'src/app/core/core/models/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.scss']
})
export class CategoriaEditComponent implements OnInit {

  item!: any;
  Id!: number;
  dataLoaded: boolean = false;

  sub!: Subscription;
  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private categoriaService: CategoriasService,
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
        this.subItem = this.categoriaService.show(this.Id)
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
    this.sub = this.categoriaService.update(this.Id,itemEdit)
      .subscribe(
        ()=> this.router.navigate([`/private/categorias`]),
        (err) => console.log(err)
      )
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }

}
