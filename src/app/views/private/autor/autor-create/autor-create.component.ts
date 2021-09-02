import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutorService } from 'src/app/core/core/models/autor.service';

@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styleUrls: ['./autor-create.component.scss']
})
export class AutorCreateComponent implements  OnInit, OnDestroy {

  sub!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private autorService: AutorService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  save(item:any){
    this.sub = this.autorService.store(item)
      .subscribe(
        ()=> this.router.navigate([`/private/autores`]),
        (err) => console.log(err)
      )
  }

  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }

}
