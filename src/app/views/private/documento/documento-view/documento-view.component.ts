import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { Subscription } from 'rxjs';
import { DocumentoService } from 'src/app/core/core/models/documento.service';
import { PrestamoService } from 'src/app/core/core/models/prestamo.service';

@Component({
  selector: 'app-documento-view',
  templateUrl: './documento-view.component.html',
  styleUrls: ['./documento-view.component.scss']
})
export class DocumentoViewComponent implements OnInit {
  
  user: any;

  item!: any;
  Id!: number;
  dataLoaded: boolean = false;

  sub!: Subscription;
  subItem!: Subscription;
  subArray: Subscription[] = [];

  serverUrl!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private prestamoService: PrestamoService,
    private documentoService: DocumentoService
  ) { 
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
    this.serverUrl = this.documentoService.serverUrl+'/Files/';
  }

  ngOnInit(): void {

    this.user = localStorage.getItem("udeo_user");

    this.user = JSON.parse(this.user);

    this.getItemData();
  }



  getItemData(){
    this.sub = this.route.params.subscribe(
      params => {
        this.Id = params['id'];
        this.subItem = this.prestamoService.show(this.Id)
        .subscribe(
          (res: any) => {

            this.item = res;

            console.log(this.item)

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



  onRightClick(event:any) {
    event.preventDefault();
  }

}
