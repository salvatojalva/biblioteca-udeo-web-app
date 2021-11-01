import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DocumentoService } from 'src/app/core/core/models/documento.service';

@Component({
  selector: 'app-documento-list',
  templateUrl: './documento-list.component.html',
  styleUrls: ['./documento-list.component.scss']
})
export class DocumentoListComponent implements OnInit, OnDestroy {

  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];

  title: string = '';
  autorName: string = '';
  tagName: string = '';
  page: number = 1;
  limit: number = 6;

  pageItemsCount!: number;

  pageSizes = [6, 15, 25];

  serverUrl!: string;


  constructor(
    private documentoService: DocumentoService
  ) {
    this.serverUrl = this.documentoService.serverUrl+'/Images/';

   }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.subItem = this.documentoService.customFiltered(
      this.title,
      this.autorName,
      this.tagName,
      this.page,
      this.limit
    )
      .subscribe(
        (res:any) => {
          this.items = res.result;
          this.pageItemsCount = res.totalCount;
        },
        err => console.error(err)
      );

    this.subArray.push(this.subItem);
  }


  ngOnDestroy(): void {
    this.subArray.forEach((sub) => {
      if(sub) sub.unsubscribe()
    })
  }


  handlePageChange(event: any): void {
    this.page = event;
    this.list();
  }

  handlePageSizeChange(event: any): void {
    this.limit = event.target.value;
    this.page = 1;
    this.list();
  }


  searchTitle(): void {
    if(this.title != ""){
      this.autorName = "";
      this.tagName = "";
    } else if(this.autorName != ""){
      this.title = "";
      this.tagName = "";
    }else if (this.tagName != ""){
      this.autorName = "";
      this.title = "";
    }

    this.page = 1;
    this.list();
  }

}
