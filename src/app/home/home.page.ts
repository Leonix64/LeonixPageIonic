import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  
  projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, non voluptates. Aperiam cum dolorem assumenda velit excepturi quaerat error voluptatum totam aut sit et provident, perferendis dolorum earum rem tenetur?',
      imageUrl: '../../assets/LyraQR.png',
      language: 'Python',
      demoUrl: 'https://example.com/project1',
      sourceUrl: 'https://github.com/Leonix64/Lyra'
    },
    {
      title: 'Project 2',
      description: 'Description for project 2.',
      imageUrl: '../../assets/BackgroundSection.jpg',
      language: 'Ionic',
      demoUrl: 'https://example.com/project2',
      sourceUrl: 'https://github.com/example/project2'
    },
    {
      title: 'Project 3',
      description: 'Description for project 3.',
      imageUrl: '../../assets/BackgroundPage.jpg',
      language: 'Angular',
      demoUrl: 'https://example.com/project3',
      sourceUrl: 'https://github.com/example/project3'
    }
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