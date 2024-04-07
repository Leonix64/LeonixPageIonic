import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  currentDateTime: Date = new Date();
  private intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnInit() { }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateDateTime() {
    this.currentDateTime = new Date();
  }
}