import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PrestamoService } from 'src/app/core/core/models/prestamo.service';

@Component({
  selector: 'app-prestamo-edit',
  templateUrl: './prestamo-edit.component.html',
  styleUrls: ['./prestamo-edit.component.scss']
})
export class PrestamoEditComponent implements OnInit, OnDestroy {

  item!: any;
  Id!: number;
  dataLoaded: boolean = false;

  sub!: Subscription;
  subItem!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private prestamoService: PrestamoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getItemData();
  }

  getItemData() {
    this.sub = this.route.params.subscribe(
      params => {
        this.Id = params['id'];
        this.subItem = this.prestamoService.show(this.Id)
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

  save(itemEdit: any) {
    this.sub = this.prestamoService.update(this.Id, itemEdit)
      .subscribe(
        () => this.router.navigate([`/private/prestamo`]),
        (err) => console.log(err)
      )
      this.subArray.push(this.sub);
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if (sub) sub.unsubscribe()
    })
  }


}
