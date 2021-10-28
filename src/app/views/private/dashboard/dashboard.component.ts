import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/core/services/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    
  }

  showStandard() {
    this.toastService.show(
      'I am a standard toast',
      { classname: 'bg-danger text-light', delay: 155000 }
    );
  }

}
