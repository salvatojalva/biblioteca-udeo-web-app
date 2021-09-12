import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditorialService } from 'src/app/core/core/models/editorial.service';

@Component({
  selector: 'app-editorial-create',
  templateUrl: './editorial-create.component.html',
  styleUrls: ['./editorial-create.component.scss']
})
export class EditorialCreateComponent implements OnInit,OnDestroy {

  sub!: Subscription;
  subArray: Subscription[] = [];

  constructor(
    private editorialService: EditorialService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save(item:any){
    this.sub = this.editorialService.store(item)
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
