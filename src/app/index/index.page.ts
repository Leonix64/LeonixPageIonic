import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit, OnDestroy {

  projects = [
    {
      title: 'Lyra QR',
      description: 'This bot was specifically created to integrate into Discord and has a standout feature: QR code generation. When a user inputs text of their choice, the bot creates an image with a QR code.',
      imageUrl: '../../assets/LyraQR.png',
      language: 'Python',
      demoUrl: 'https://example.com/project1',
      sourceUrl: 'https://github.com/Leonix64/Lyra'
    },
    {
      title: 'RainFlow',
      description: 'AI for map generation: determining the optimal location to build a dam based on weather conditions that favor increased water flow.',
      imageUrl: '../../assets/MapaPresas.png',
      language: 'Python',
      demoUrl: 'https://example.com/project2',
      sourceUrl: 'https://github.com/Leonix64/RainFlow.git'
    },
  ];  

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