import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SedeService } from 'src/app/core/core/models/sede.service';

@Component({
  selector: 'app-sede-create',
  templateUrl: './sede-create.component.html',
  styleUrls: ['./sede-create.component.scss']
})
export class SedeCreateComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private sedeService: SedeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  save(item:any){
    this.sub = this.sedeService.store(item)
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
