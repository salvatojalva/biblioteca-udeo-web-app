import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DivisionesService } from 'src/app/core/core/models/divisiones.service';

@Component({
  selector: 'app-division-create',
  templateUrl: './division-create.component.html',
  styleUrls: ['./division-create.component.scss']
})
export class DivisionCreateComponent implements OnInit {

  sub!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private divisionService: DivisionesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  save(item:any){
    this.sub = this.divisionService.store(item)
      .subscribe(
        ()=> this.router.navigate([`/private/divisiones`]),
        (err) => console.log(err)
      )
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }

}
