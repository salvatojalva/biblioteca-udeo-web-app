import { Component, OnInit } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-documento-view',
  templateUrl: './documento-view.component.html',
  styleUrls: ['./documento-view.component.scss']
})
export class DocumentoViewComponent implements OnInit {
  

  constructor() { 
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit(): void {
  }

  onRightClick(event:any) {
    event.preventDefault();
  }

}
