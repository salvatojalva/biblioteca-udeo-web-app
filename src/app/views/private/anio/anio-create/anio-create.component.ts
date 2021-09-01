import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnioService } from 'src/app/core/core/models/anio.service';

@Component({
  selector: 'app-anio-create',
  templateUrl: './anio-create.component.html',
  styleUrls: ['./anio-create.component.scss']
})
export class AnioCreateComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private anioService: AnioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  save(item:any){
    this.sub = this.anioService.store(item)
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
