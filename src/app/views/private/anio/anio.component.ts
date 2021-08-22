import { Component, OnInit } from '@angular/core';
import { AnioService } from 'src/app/core/core/services/anio.service';

@Component({
  selector: 'app-anio',
  templateUrl: './anio.component.html',
  styleUrls: ['./anio.component.scss']
})
export class AnioComponent implements OnInit {

  constructor(
    private anioService: AnioService
  ) { }

  ngOnInit(): void {
    this.anioService.getAll()
          .subscribe(
            (res:any) =>{
              
              console.log(res);
              
            },
            (err:any) => {
              
              console.log(err)
            }
          );
  }

}
