import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ScaffoldHttpService } from 'src/app/core/core/services/scaffold-http.service';

@Component({
  selector: 'app-fomr-modal',
  templateUrl: './fomr-modal.component.html',
  styleUrls: ['./fomr-modal.component.scss']
})
export class FomrModalComponent implements OnInit {

  @Input() Type: any;

  sub!: Subscription;
  subArray: Subscription[] = [];
  addedItem: any;

  constructor(
    public activeModal: NgbActiveModal,
    private scffService: ScaffoldHttpService
  ) {}

  ngOnInit(): void {
  }

  save(item:any){
    this.sub = this.scffService.storeGeneric(item, this.Type)
      .subscribe(
        (response:any)=>{
          this.activeModal.close(response);
        } ,
        (err) => console.log(err)
      )
  }

}
