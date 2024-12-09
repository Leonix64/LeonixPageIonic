import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {

  // Reloj
  currentDateTime: Date = new Date();
  private intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateDateTime() {
    this.currentDateTime = new Date();
  }
}
