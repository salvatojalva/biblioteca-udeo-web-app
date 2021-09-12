import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarreraService } from 'src/app/core/core/models/carrera.service';

@Component({
  selector: 'app-carrera-create',
  templateUrl: './carrera-create.component.html',
  styleUrls: ['./carrera-create.component.scss']
})
export class CarreraCreateComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private carreraService: CarreraService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  save(item:any){
    this.sub = this.carreraService.store(item)
      .subscribe(
        ()=> this.router.navigate([`/private/carreras`]),
        (err) => console.log(err)
      )
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }

}
